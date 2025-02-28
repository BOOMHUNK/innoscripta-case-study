import NewsApiClient from "./newsApiClient/client";
import ClientFactory from "./clientFactory";
import { MakeCategoriesArrayUnique } from "./utils";
export { NewsApiClient, ClientFactory, MakeCategoriesArrayUnique };

export const AvailableClients = {
    newsApi: NewsApiClient,
};