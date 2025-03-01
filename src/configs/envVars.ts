export const newsApi_key = import.meta.env.VITE_NEWS_API_KEY as string;
export const newsApi_baseUrl = import.meta.env.VITE_NEWS_API_BASE_URL as string;


export const newsApiOrg_key = import.meta.env.VITE_NEWS_API_ORG_KEY as string;
export const newsApiOrg_baseUrl = import.meta.env.VITE_NEWS_API_ORG_BASE_URL as string;


export const guardian_key = import.meta.env.VITE_GUARDIAN_KEY as string;
export const guardian_baseUrl = import.meta.env.VITE_GUARDIAN_BASE_URL as string;

// we use feature flag env vars to be able to turn on/off features
export const ff_useNewsApi = (import.meta.env.VITE_FF_USE_NEWS_API as string || "false") == "true";
export const ff_useNewsApiOrg = (import.meta.env.VITE_FF_USE_NEWS_API_ORG as string || "false") == "true";
export const ff_useGuardianApi = (import.meta.env.VITE_FF_USE_GUARDIAN_API as string || "false") == "true";

