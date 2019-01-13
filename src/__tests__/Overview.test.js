import OverviewService from "../Overview";

test("SDK_GetOverview_ShouldLive", async () => {
    try {
        const data = await OverviewService.getOverview();

        expect(typeof data).toBe("object");
    } catch (e) {
        expect(e).toBeNull();
    }
});
