const localGlobalConstants = {
  BASE_URL: "http://localhost:1337/api",
  URL: "http://localhost:1337",
  DOMAIN: "http://localhost:3000",
};

const testingGlobalConstants = {
  BASE_URL: "https://clarient-starpi-qa.millipixels.in/api",
  URL: "https://clarient-starpi-qa.millipixels.in",
  DOMAIN: "https://clarientweb-qa.millipixels.in",
};

const productionGlobalConstants = {
  BASE_URL: "https://api.clarient.us/api",
  URL: "https://api.clarient.us",
  DOMAIN: "https://clarient.us",
};

let config = localGlobalConstants;
// var config = testingGlobalConstants;
if (process.env.NEXT_PUBLIC_ENV === "Production") {
  config = productionGlobalConstants;
} else if (process.env.NEXT_PUBLIC_ENV === "Testing") {
  config = testingGlobalConstants;
}

export const globalConstants = {
  ...config,
};
