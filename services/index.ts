import axios, { CancelToken } from "axios"

export const scrapeWebsiteData = async (urlString: string, cancelToken: CancelToken) => {

    try {
        const { data } = await axios.get(urlString,       
            { cancelToken: cancelToken});
        return data;
    } catch (error: any) {
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error?.message);
            throw new Error('Request canceled')
          } else {
              console.error('Request failed', error?.message);
            throw new Error('Request failed')
          }
    }

}