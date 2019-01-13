import CrawlService from "../Crawl";

test("SDK_Crawl_ShouldLive", async () => {
    try {
        const data = await CrawlService.getOverview();

        expect(typeof data).toBe("array");
    } catch (e) {
        expect(e).toBeNull();
    }
});
