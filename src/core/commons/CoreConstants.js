export class CoreConstants {
    static HttpResponse = class {
        static get OK() { return 0; }
        static get ERROR_FUNTIONAL() { return 2; }
        static get REQUIRED_FIELDS() { return 1; }
        static get ERROR_TECHNICAL() { return -1; }

    }
    static Accion = class {
        
        static Login = class {
            static get REQUEST() { return '@AUTH.LOGIN_REQUEST'; }
            static get SUCCESS() { return '@AUTH.LOGIN_SUCCESS'; }
            static get FAILURE() { return '@AUTH.LOGIN_FAILURE'; }
            static get LOGOUT() { return '@AUTH.LOGOUT'; }
            static get DONE() { return '@AUTH.DONE'; }
        }

        static Breadcrump = class {
            static get CAMBIAR_TITULO() { return '@BREADCRUMP.CAMBIAR_TITULO'; }
        }

        static Toast = class {
            static get MOSTRAR_MENSAJE() { return '@CORE.TOAST.MOSTRAR'; }
            static get OCULTAR_MENSAJE() { return '@CORE.TOAST.OCULTAR'; }
        }
        static FeedBack = class {
            static get MOSTRAR_MENSAJE() { return '@CORE.FEEDBACK.MOSTRAR'; }
            static get OCULTAR_MENSAJE() { return '@CORE.FEEDBACK.OCULTAR'; }
        }

    }

}