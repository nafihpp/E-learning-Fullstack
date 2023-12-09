export const genericFetch = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return [json, null];
    } catch (error) {
        return [null, error];
    }
};
