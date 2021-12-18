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
      static get GET_USER_BY_ROLE_ID() {
        return '@ROLES.GET-USER-BY-ROLE-ID';
      }
      static get EDIT_ROLE() {
        return '@ROLES.EDIT-ROLE';
      }
      static get SET_FILTER_VALUES() {
        return '@ROLES.SET-FILTER-VALUES';
      }
      static get REMOVE_FILTER_VALUES() {
        return '@ROLES.REMOVE-FILTER-VALUES';
      }
    };
  };
}
