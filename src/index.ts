import AdminService from "./Admin";
import AuthenService from "./Authen";
import CrawlService from "./Crawl";
import MyConfessService from "./MyConfess";
import OverviewService from "./Overview";
import SearchService from "./Search";
import SendService from "./Send";
import PushService from "./Push";
import UserService from "./Users";
import RadioService from "./Radio";
import ChangeService from "./Change";

declare global {
    interface Window {
        FPTUSDK: any;
    }

    var APP_ENV: any;
}

class SDK {
    protected admin: AdminService;
    protected authen: AuthenService;
    protected crawl: CrawlService;
    protected myconfess: MyConfessService;
    protected overview: OverviewService;
    protected search: SearchService;
    protected send: SendService;
    protected push: PushService;
    protected user: UserService;
    protected radio: RadioService;
    protected change: ChangeService;

    constructor() {
        this.admin = new AdminService();
        this.authen = new AuthenService();
        this.crawl = new CrawlService();
        this.myconfess = new MyConfessService();
        this.overview = new OverviewService();
        this.search = new SearchService();
        this.send = new SendService();
        this.push = new PushService();
        this.user = new UserService();
        this.radio = new RadioService();
        this.change = new ChangeService();
    }

    public getVersion(): string {
        return "v1";
    }

    public getBaseURL(): string {
        return APP_ENV.API_BASE_URL;
    }
}

window.FPTUSDK = new SDK();
