import OverviewService from "../Overview";

test("SDK_GetOverview_ShouldLive", async () => {
    const data = await new OverviewService().getOverview();

    expect(typeof data).toBe("object");
});
