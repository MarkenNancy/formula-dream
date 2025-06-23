"use server";
import { cookies } from "next/headers";
// export const deleteCookiesUser = async () => {
//   const cookieStore = await cookies();
//   cookieStore.delete("video");
//   const user = cookieStore.get("video");
//   if (!user?.value) {
//     return true;
//   }
//   return false;
// };

export const getCookiesVideo = async () => {
  const cookieStore = await cookies();
  const user = cookieStore.get("video");
  return user?.value || null;
};
export const setCookiesVideo = async () => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "video",
    value: "true",
    path: "/",
    // sameSite: "strict",
    // httpOnly: true,
    // maxAge: 1800,
  });

  const user = cookieStore.get("video");
  if (user?.value) {
    return true;
  }
  return false;
};

export const getCookiesPassword = async () => {
  const cookieStore = await cookies();
  const protect = cookieStore.get("protect");
  return protect?.value || null;
};
export const setCookiesPassword = async () => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "protect",
    value: "true",
    path: "/",
    // sameSite: "strict",
    // httpOnly: true,
    // maxAge: 1800,
  });

  const user = cookieStore.get("protect");
  if (user?.value) {
    return true;
  }
  return false;
};
