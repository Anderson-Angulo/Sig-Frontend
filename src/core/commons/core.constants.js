export class CoreConstants {
    static HttpResponse = class {
        static get OK() { return 0; }
        static get ERROR_FUNTIONAL() { return 1; }
        static get ERROR_TECHNICAL() { return -1; }

    }
    static Accion = class {
        // static Core = class {
        //     static get MOSTRAR_MENSAJE() { return '@CORE.MOSTRAR_MENSAJE'; }
        //     static get OCULTAR_MENSAJE() { return '@CORE.OCULTAR_MENSAJE'; }
        // }

        static Toast = class {
            static get MOSTRAR_MENSAJE() { return '@CORE.TOAST.MOSTRAR'; }
            static get OCULTAR_MENSAJE() { return '@CORE.TOAST.OCULTAR'; }
        }

    }

}