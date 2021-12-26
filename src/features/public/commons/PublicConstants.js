export class PublicConstants {
  static Accion = class {
    static RecuperapContrasena = class {
      static get MOSTRAR() {
        return '@RECUPERAR-CONTRASENA.MOSTRAR';
      }
      static get OCULTAR() {
        return '@RECUPERAR-CONTRASENA.OCULTAR';
      }
      static get REQUEST() {
        return '@RECUPERAR-CONTRASENA.REQUEST';
      }
      static get DONE() {
        return '@RECUPERAR-CONTRASENA.DONE';
      }
      static get FAILURE() {
        return '@RECUPERAR-CONTRASENA.FAILURE';
      }
    };
    static SelecEmpresaSede = class {
      static get REQUEST() {
        return '@SELECCIONAR-EMPRESA-SEDE.SEL_REQUEST';
      }
      static get SUCCESS() {
        return '@SELECCIONAR-EMPRESA-SEDE.SEL_SUCCESS';
      }
      static get FAILURE() {
        return '@SELECCIONAR-EMPRESA-SEDE.SEL_FAILURE';
      }

      static get MOSTRAR() {
        return '@SELECCIONAR-EMPRESA-SEDE.MOSTRAR';
      }
      static get OCULTAR() {
        return '@SELECCIONAR-EMPRESA-SEDE.OCULTAR';
      }
      static get SELECCIONAR() {
        return '@SELECCIONAR-EMPRESA-SEDE.SELECCIONAR';
      }
    };
  };
}
