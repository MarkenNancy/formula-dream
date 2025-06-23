"use server";
import { globalConstants } from "@/globalvariables";
const APIBASEURL = globalConstants.BASE_URL;
import { FormSchema } from "./formSchema";
import { getGetStartedByEmail } from "@/data/loaders";

export async function submitForm(formData: FormSchema) {
  try {
    const { data: existingUser } = await getGetStartedByEmail(formData.email);
    if (existingUser && existingUser.length > 0) {
      return {
        status: 400,
        message: `Email already exists.`,
      };
    }
    const response = await fetch(`${APIBASEURL}/clarient-get-starteds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.POST_API_TOKEN}`,
      },
      // body: JSON.stringify(formData),
      body: JSON.stringify({
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          topPriority: formData.topPriority,
          source_page: formData.source_page,
        },
      }),
    });
    const res = await response.json();
    // console.dir(res.error);
    // console.dir(res.error.details.errors);
    if (res.error) {
      if (res.error.name === "ValidationError") {
        return {
          status: res.error.status ?? 400,
          message: `Email already exists.`,
        };
      }
      return {
        status: res.error.status ?? 400,
        message: `${res.error.message}`,
      };
    } else {
      return {
        status: 200,
        message: `Successfully`,
      };
    }
  } catch (error) {
    console.error("Error get started:", error);
    return {
      status: 500,
      message: `Something went wrong please try again`,
    };
  }
}
