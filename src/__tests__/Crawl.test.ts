import CrawlService from "../Crawl";

test("SDK_Crawl_ShouldLive", async () => {
    const data = await new CrawlService().getArticles("fpt");

    expect(typeof data).toBe("object");
});
