// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { email, name } = body;

//     const listId = process.env.KLAVIYO_LIST_ID!;
//     const apiKey = process.env.KLAVIYO_API_KEY!;

//     const response = await fetch(
//       `https://a.klaviyo.com/api/v2/list/${listId}/members`,
//       // `https://a.klaviyo.com/api/lists/${listId}/relationships/subscribers/`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           profiles: [{ email, first_name: name }],
//         }),
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       return NextResponse.json(
//         { success: false, error: errorText },
//         { status: response.status }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch (error: any) {
//     console.error("Error submitting to Klaviyo:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName } = body;

    const API_KEY = "pk_d2217db9c18fea72b16a2ed196580a96c6";
    const LIST_ID = "VpmzSL";

    const headers = {
      "Authorization": `Klaviyo-API-Key ${API_KEY}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "revision": "2025-04-15"
    };

    // STEP 1: Subscribe user with consent
    const subscribeRes = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/", {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            profiles: {
              data: [{
                type: "profile",
                attributes: {
                  email,
                  subscriptions: {
                    email: {
                      marketing: {
                        consent: "SUBSCRIBED"
                      }
                    }
                  }
                }
              }]
            }
          }
        }
      })
    });

    if (subscribeRes.status !== 202) {
      const err = await subscribeRes.text();
      return NextResponse.json({ error: `Subscription failed: ${err}` }, { status: 400 });
    }

    // STEP 2: Wait for profile to exist (polling)
    let profileId = null;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 1000));
      const filter = encodeURIComponent(`equals(email,"${email}")`);
      const profileRes = await fetch(`https://a.klaviyo.com/api/profiles/?filter=${filter}`, { headers });
      const profileData = await profileRes.json();

      if (profileData?.data?.length > 0) {
        profileId = profileData.data[0].id;
        break;
      }
    }

    if (!profileId) {
      return NextResponse.json({ error: "Profile not found after 30s wait" }, { status: 404 });
    }

    // STEP 3: Update name
    const [firstName, ...rest] = fullName.trim().split(" ");
    const lastName = rest.join(" ");
    await fetch(`https://a.klaviyo.com/api/profiles/${profileId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        data: {
          type: "profile",
          id: profileId,
          attributes: {
            first_name: firstName,
            ...(lastName ? { last_name: lastName } : {})
          }
        }
      })
    });

    // STEP 4: Add profile to list
    const listRes = await fetch(`https://a.klaviyo.com/api/lists/${LIST_ID}/relationships/profiles/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: [{ type: "profile", id: profileId }]
      })
    });

    if (![200, 202, 204].includes(listRes.status)) {
      const err = await listRes.text();
      return NextResponse.json({ error: `Failed to add to list: ${err}` }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
