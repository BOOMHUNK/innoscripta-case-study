export const newsApiKey = import.meta.env.VITE_NEWS_API_KEY as string;
export const newsApiBaseUrl = import.meta.env.VITE_NEWS_API_BASE_URL as string;


export const newsApiOrgKey = import.meta.env.VITE_NEWS_API_ORG_KEY as string;
export const newsApiOrgBaseUrl = import.meta.env.VITE_NEWS_API_ORG_BASE_URL as string;


export const guardianApiKey = import.meta.env.VITE_GUARDIAN_API_KEY as string;

// we use feature flag env vars to be able to turn on/off features
export const ff_useNewsApi = (import.meta.env.VITE_FF_USE_NEWS_API as string || "false") == "true";
export const ff_useNewsApiOrg = (import.meta.env.VITE_FF_USE_NEWS_API_ORG as string || "false") == "true";
export const ff_useGuardianApi = (import.meta.env.VITE_FF_USE_GUARDIAN_API as string || "false") == "true";

