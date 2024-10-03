import axios from "axios"

export const scrapeWebsiteData = async (urlString: string) => {
    try {
        const { data } = await axios.get(urlString);
        return data;
    } catch (error) {
        throw new Error("Unable to scrape website data")
    }

}