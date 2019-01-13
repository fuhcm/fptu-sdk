import AdminService from "./Admin";
import AuthenService from "./Authen";
import CrawlService from "./Crawl";
import MyConfessService from "./MyConfess";
import OverviewService from "./Overview";
import SearchService from "./Search";
import SendService from "./Send";

class SDK {
    constructor() {
        this.admin = AdminService;
        this.authen = AuthenService;
        this.crawl = CrawlService;
        this.myconfess = MyConfessService;
        this.overview = OverviewService;
        this.search = SearchService;
        this.send = SendService;
    }
}

window.FPTUSDK = new SDK();
