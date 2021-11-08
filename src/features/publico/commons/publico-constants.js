export class PublicoConstants {
    static Login = class {
        static get REQUEST() { return '@AUTH.LOGIN_REQUEST'; }
        static get SUCCESS() { return '@AUTH.LOGIN_SUCCESS'; }
        static get FAILURE() { return '@AUTH.LOGIN_FAILURE'; }
    }
    static RecuperapContrasena = class {
        static get MOSTRAR() { return '@AUTH.MOSTRAR_RECUPERAR'; }
        static get OCULTAR() { return '@AUTH.OCULTAR_RECUPERAR'; }
    }
}