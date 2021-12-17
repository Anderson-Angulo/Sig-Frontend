export class ConfigurationConstants {
  static Accion = class {
    static ToggleSidebar = class {
      static get TOGGLE() {
        return '@SIDEBAR.TOGGLE';
      }
    };
    static Roles = class {
      static get SETLIST() {
        return '@ROLES.SET-ROLES';
      }
      static get CHANGEFILTERMODAL() {
        return '@ROLES.FILTER-MODAL';
      }
      static get LISTOPTIONS() {
        return '@ROLES.LIST-OPTIONS';
      }
    };
  };
}
