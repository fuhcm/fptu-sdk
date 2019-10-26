export const BASE_URL = APP_ENV.API_BASE_URL;
export const AUTH_BASE_URL = BASE_URL + "/api/v1/auth";
export const API_BASE_URL = BASE_URL + "/api/v1";

// Authentication
export const AUTH__LOGIN = AUTH_BASE_URL + "/login";
export const AUTH__LOGIN_GOOGLE = AUTH_BASE_URL + "/google";
export const AUTH__SIGN_UP = AUTH_BASE_URL + "/signup";

// AdminCP
export const ADMINCP__GET_CONFESS = API_BASE_URL + "/confessions";
export const ADMINCP__APPROVE_CONFESS = API_BASE_URL + "/confessions/approve";
export const ADMINCP__REJECT_CONFESS = API_BASE_URL + "/confessions/reject";

// Guest
export const GUEST__POST_CONFESS = API_BASE_URL + "/confessions";
export const GUEST__GET_MY_CONFESS = API_BASE_URL + "/confessions/myconfess";
export const GUEST__GET_OVERVIEW = API_BASE_URL + "/confessions/overview";
export const GUEST__GET_APPROVED = API_BASE_URL + "/confessions/approved";
export const GUEST__GET_SEARCH = API_BASE_URL + "/confessions/search";

// Crawl
export const CRAWL__URL = API_BASE_URL + "/crawl";

// Push
export const PUSH__URL = API_BASE_URL + "/confessions/sync";

// User
export const GET__USER = API_BASE_URL + "/users";

// Radio
export const RADIO = API_BASE_URL + "/radios";

// Change
export const CHANGE__SIGN = API_BASE_URL + "/change/sign";
export const CHANGE_GET_LIST = API_BASE_URL + "/change";

// Post
export const POST__LIST = API_BASE_URL + "/posts";
export const POST__NEW = API_BASE_URL + "/posts";
export const POST__UPDATE = API_BASE_URL + "/posts";
