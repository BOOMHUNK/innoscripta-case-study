import NewsApiClient from "./newsApiClient/client";
import ClientFactory from "./clientFactory";
import { MakeCategoriesArrayUnique } from "./utils";
import { ff_useNewsApi } from "@/utils";
export { NewsApiClient, ClientFactory, MakeCategoriesArrayUnique };

export const AvailableClients: { [clientName: string]: ClientFactory } = {
    ...(ff_useNewsApi ? { [NewsApiClient.name]: NewsApiClient } : {}),
};
