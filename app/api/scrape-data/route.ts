import { NextRequest, NextResponse } from "next/server";
import { fetchAndProcessWebsite } from "@/utils/scrapper";
import getGenerativeAIResponse from "@/utils/googleGenerativeAI";
import { filterSearchString } from "@/utils/filterSearchString";



export const GET = async (req: NextRequest) => {

  const searchParams = req.nextUrl.searchParams;

    const urlString = searchParams.get("url") as string;

    const { url, max_execution_time, filter, store } = filterSearchString(urlString);

    console.log(url)

    if (!url) {
      return  NextResponse.json("URL is required", {status: 400});
    }
  
    try {
  
      const content = await fetchAndProcessWebsite(url);

      if(!content) {
        return  NextResponse.json("Unable to scrape data", { status: 400 });
      }

      const result = await getGenerativeAIResponse(content);

      return NextResponse.json(result, {status: 200});

    } catch (error) {
      console.log(`[SCRAPE_DATA_GET] ${error}`)
      return new NextResponse("Internal server error", {status: 500})
    }
}