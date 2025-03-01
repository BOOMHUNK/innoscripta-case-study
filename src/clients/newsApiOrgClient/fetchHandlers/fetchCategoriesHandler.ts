import { FetchTagsHandler, Tag } from "@/types";

const fetchCategoriesHandler: FetchTagsHandler = (clientName, baseUrl, endpoint, apiToken, prefix) => {
    baseUrl; endpoint; apiToken;

    const categories = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
    ];
    return Promise.resolve(categories
        .reduce((acc, category) => {
            if (category.includes(prefix.toLowerCase())) {
                acc.push({
                    displayName: category.toLowerCase(),
                    clientsCompatibleValues: { [clientName]: [category] },
                } as Tag);
            }
            return acc;
        }, [] as Tag[]));
}

export default fetchCategoriesHandler;