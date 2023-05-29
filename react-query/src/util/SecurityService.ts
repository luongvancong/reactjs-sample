import localStore from "@util/LocalStore";
import { IUser } from "@model/user.model";

class SecurityService {
  static can = (permission: string) => {
    const permissions = localStore.getJson<string[]>("permissions") || [];
    return permissions.includes(permission);
  };

  static isLogged = () => {
    const accessToken = localStore.getItem("accessToken");
    return !!accessToken;
  };

  static getUser = () => {
    if (SecurityService.isLogged()) {
      return localStore.getJson<IUser>("loggedUser");
    }
  };
}

export default SecurityService;
