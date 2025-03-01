import { ClientFactory, GuardianClient, NewsApiClient, NewsApiOrgClient } from "@/clients";
import { ff_useGuardianApi, ff_useNewsApi, ff_useNewsApiOrg } from "./envVars";

export const AvailableClients: { [key: string]: ClientFactory } = {
    ...(ff_useNewsApi && { [NewsApiClient.name]: NewsApiClient }),
    ...(ff_useNewsApiOrg && { [NewsApiOrgClient.name]: NewsApiOrgClient }),
    ...(ff_useGuardianApi && { [GuardianClient.name]: GuardianClient }),
};




export const EachApiPageSize = 10;


