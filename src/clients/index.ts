import NewsApiClient from "./newsApiClient/client";
import ClientFactory from "./clientFactory";
import { MakeCategoriesArrayUnique } from "./utils";
export const AvailableClients = {
    newsApi: NewsApiClient,
};
export { NewsApiClient, ClientFactory, MakeCategoriesArrayUnique };
