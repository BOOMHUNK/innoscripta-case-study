import { ClientFactory, GuardianClient, NewsApiClient, NewsApiOrgClient } from "@/clients";
import { ff_useGuardianApi, ff_useNewsApi, ff_useNewsApiOrg, maxPostsPerApiRequest } from "./envVars";

/**
 * Available clients for different API providers go into this object.
 * - The keys in the object correspond to the name property of the clients,
 * and the values are the client instances themselves.
 * - The object is constructed dynamically based on the values of the feature flag environment variables.
 */
export const AvailableClients: { [key: string]: ClientFactory } = {
    ...(ff_useNewsApi && { [NewsApiClient.name]: NewsApiClient }),
    ...(ff_useNewsApiOrg && { [NewsApiOrgClient.name]: NewsApiOrgClient }),
    ...(ff_useGuardianApi && { [GuardianClient.name]: GuardianClient }),
};




export const EachApiPageSize = maxPostsPerApiRequest;


