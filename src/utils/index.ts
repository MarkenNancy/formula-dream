import { globalConstants } from "@/globalvariables";

// import Swal from "sweetalert2";

// const APIBASEURL = globalConstants.BASE_URL;
// const MEDIA_URL = globalConstants.URL;

// import Swal from "sweetalert2";

// export function stringToId(str: string) {
//   return str.toLocaleLowerCase().trim().replaceAll(" ", "-");
// }
// export function capitalizeText(str: string) {
//   const textStr = str.toLowerCase();
//   // return str.toLowerCase();
//   return textStr.charAt(0).toUpperCase() + textStr.slice(1);
// }
// /* eslint-disable */
// export function flattenAttributes(data: any): any {
//   // Check if data is a plain object; return as is if not
//   if (
//     typeof data !== "object" ||
//     data === null ||
//     data instanceof Date ||
//     typeof data === "function"
//   ) {
//     return data;
//   }

//   // If data is an array, apply flattenAttributes to each element and return as array
//   if (Array.isArray(data)) {
//     return data.map((item) => flattenAttributes(item));
//   }

//   // Initialize an object with an index signature for the flattened structure
//   let flattened: { [key: string]: any } = {};

//   // Iterate over each key in the object
//   for (let key in data) {
//     // Skip inherited properties from the prototype chain
//     if (!data.hasOwnProperty(key)) continue;

//     // If the key is 'attributes' or 'data', and its value is an object, merge their contents
//     if (
//       (key === "attributes" || key === "data") &&
//       typeof data[key] === "object" &&
//       !Array.isArray(data[key])
//     ) {
//       Object.assign(flattened, flattenAttributes(data[key]));
//     } else {
//       // For other keys, copy the value, applying flattenAttributes if it's an object
//       flattened[key] = flattenAttributes(data[key]);
//     }
//   }

//   return flattened;
// }

// export function getStrapiURL() {
//   return MEDIA_URL ?? "http://localhost:1337";
// }

// export function getStrapiMedia(url: string) {
//   if (url == null) return null;
//   if (url.startsWith("data:")) return url;
//   if (url.startsWith("http") || url.startsWith("//")) return url;
//   return `${getStrapiURL()}${url}`;
// }

// type SweetAlertProps = {
//   type: "success" | "error";
//   title?: string;
//   text?: string;
// };
// export function sweetAlert<SweetAlertProps>(
//   type = "success",
//   title = "Success!",
//   text = "Form submitted successfully!"
// ) {
//   if (type === "success") {
//     Swal.fire({
//       icon: "success",
//       title: title,
//       text: text,
//       // confirmButtonText: 'Cool',
//       showConfirmButton: false,
//       timer: 4000,
//       position: "center",
//       // toast: true,
//       // timerProgressBar: true,
//       // showCloseButton: true,
//     });
//   }
//   if (type === "error") {
//     Swal.fire({
//       icon: "error",
//       title: "Error!",
//       text: "Something went wrong. Please try submitting the form again.",
//       // confirmButtonText: 'Cool',
//       showConfirmButton: false,
//       timer: 3000,
//       position: "center",
//       // toast: true,
//       // timerProgressBar: true,
//       // showCloseButton: true,
//     });
//   }
// }
