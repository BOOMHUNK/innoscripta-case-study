import NewsApiClient from "./newsApiClient/client";
import ClientFactory from "./clientFactory";
export const AvailableClients = {
    newsApi: [NewsApiClient],
};
export { NewsApiClient, ClientFactory };
