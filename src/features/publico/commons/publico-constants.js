export class PublicoConstants {

    static Accion = class {
        static Login = class {
            static get REQUEST() { return '@AUTH.LOGIN_REQUEST'; }
            static get SUCCESS() { return '@AUTH.LOGIN_SUCCESS'; }
            static get FAILURE() { return '@AUTH.LOGIN_FAILURE'; }
            // static get DONE() { return '@AUTH.DONE'; }
        }
        static RecuperapContrasena = class {
            static get MOSTRAR() { return '@RECUPERAR-CONTRASENA.MOSTRAR'; }
            static get OCULTAR() { return '@RECUPERAR-CONTRASENA.OCULTAR'; }
        }
        static SelecEmpresaSede = class {

            static get REQUEST() { return '@SELECCIONAR-EMPRESA-SEDE.SEL_REQUEST'; }
            static get SUCCESS() { return '@SELECCIONAR-EMPRESA-SEDE.SEL_SUCCESS'; }
            static get FAILURE() { return '@SELECCIONAR-EMPRESA-SEDE.SEL_FAILURE'; }

            static get MOSTRAR() { return '@SELECCIONAR-EMPRESA-SEDE.MOSTRAR'; }
            static get OCULTAR() { return '@SELECCIONAR-EMPRESA-SEDE.OCULTAR'; }
            static get SELECCIONAR() { return '@SELECCIONAR-EMPRESA-SEDE.SELECCIONAR'; }
        }
    }


}