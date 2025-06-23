import qs from "qs";

import { globalConstants } from "@/globalvariables";
import { flattenAttributes } from "@/utils/index";

const APIBASEURL = globalConstants.BASE_URL;
/*
export async function fetchData(url: string) {
  try {
    // const authToken = await getAuthToken();
    // const headers = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${authToken}`,
    //   },
    // };
    const response = await fetch(url, {
      // cache: "no-store",
      // next: { revalidate: 600 },
      next: { revalidate: 1 },
    });
    if (response.status === 200) {
      const data = await response.json();
      return flattenAttributes(data);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error; // or return null;
    return null;
  }
}
*/

export async function fetchDataWithToken(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 1 },
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GET_API_TOKEN}`,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return flattenAttributes(data);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error; // or return null;
    return null;
  }
}

export async function getOpenPositions() {
  const url = new URL("/api/open-positions", APIBASEURL);
  url.search = qs.stringify({
    sort: ["updatedAt:desc"],
    pagination: {
      page: 1,
      pageSize: 100,
    },
    // filters: {
    //   type: {
    //     $eq: "job",
    //   },
    // },
    // populate: {
    //   content: {
    //     populate: true,
    //   },
    // },
  });
  return await fetchDataWithToken(url.href);
}
export async function getOpenPositionsBySlug(slug: string) {
  const url = new URL("/api/open-positions", APIBASEURL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      content: {
        populate: true,
      },
    },
  });
  return await fetchDataWithToken(url.href);
}

export async function getOpenPositionsMetaBySlug(slug: string) {
  const url = new URL("/api/open-positions", APIBASEURL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      metaData: {
        populate: {
          keywords: true,
        },
      },
    },
  });
  return await fetchDataWithToken(url.href);
}

export async function getBlogPageData() {
  const url = new URL("/api/clarient-blog-page", APIBASEURL);
  url.search = qs.stringify({
    populate: {
      // metaData: {
      //   populate: true,
      // },
      sections: {
        populate: {
          blogs: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "width", "height"],
              },
            },
          },
        },
      },
    },
  });
  return await fetchDataWithToken(url.href);
}

export async function getBlogBySlug(slug: string) {
  const url = new URL("/api/blogs", APIBASEURL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      // metaData: {
      //   populate: {
      //     keywords: true,
      //   },
      // },
      image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
      author: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      content: {
        populate: true,
      },
    },
  });
  return await fetchDataWithToken(url.href);
}

export async function getBlogMetaBySlug(slug: string) {
  const url = new URL("/api/blogs", APIBASEURL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      metaData: {
        populate: {
          keywords: true,
        },
      },
      image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
    },
  });
  return await fetchDataWithToken(url.href);
}

export async function getGlobalsData() {
  const url = new URL("/api/global", APIBASEURL);
  url.search = qs.stringify({
    populate: {
      // metaData: {
      //   populate: {
      //     keywords: true,
      //   },
      // },
      address: {
        populate: true,
      },
    },
  });
  return await fetchDataWithToken(url.href);
}

export async function getGetStartedByEmail(email: string) {
  const url = new URL("/api/clarient-get-starteds", APIBASEURL);
  url.search = qs.stringify({
    filters: {
      email: {
        $eq: email,
      },
    },
  });
  return await fetchDataWithToken(url.href);
}
