import CrawlService from "../Crawl";

test("SDK_Crawl_ShouldLive", async () => {
    const data = await CrawlService.getArticles("fpt");

    expect(typeof data).toBe("object");
});
