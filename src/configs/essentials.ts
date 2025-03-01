import { ClientFactory, NewsApiClient, NewsApiOrgClient } from "@/clients";
import { ff_useNewsApi, ff_useNewsApiOrg } from "./envVars";

export const AvailableClients: { [key: string]: ClientFactory } = {
    ...(ff_useNewsApi && { [NewsApiClient.name]: NewsApiClient }),
    ...(ff_useNewsApiOrg && { [NewsApiOrgClient.name]: NewsApiOrgClient }),
};



export const EachApiPageSize = 16;


