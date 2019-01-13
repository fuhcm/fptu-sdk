import OverviewService from "../Overview";
import CrawlService from "../Crawl";

test("SDK_GetOverview_ShouldLive", async () => {
    try {
        const data = await OverviewService.getOverview();

        expect(typeof data).toBe("object");
    } catch (e) {
        expect(e).toBeNull();
    }
});

test("SDK_Crawl_ShouldLive", async () => {
    try {
        const data = await CrawlService.getOverview();

        expect(typeof data).toBe("array");
    } catch (e) {
        expect(e).toBeNull();
    }
});
