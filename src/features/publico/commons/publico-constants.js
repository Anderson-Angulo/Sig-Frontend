export class PublicoConstants {
    static Login = class {
        static get REQUEST() { return '@AUTH.LOGIN_REQUEST'; }
        static get SUCCESS() { return '@AUTH.LOGIN_SUCCESS'; }
        static get FAILURE() { return '@AUTH.LOGIN_FAILURE'; }
    }
}