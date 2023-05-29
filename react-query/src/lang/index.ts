import { get } from "lodash";
import en from "./en/en.json";
import vi from "./vn/vn.json";
import indo from "./indonesia/indonesia.json";
import thai from "./thailand/thailand.json";
import localStore from "@util/LocalStore";

const language = localStore.getItem("language");

const lang = (function lang(_language) {
  switch (_language) {
    case "en":
      return en;
    case "vi":
      return vi;
    case "indo":
      return indo;
    case "thai":
      return thai;
    default:
      return vi;
  }
})(language);

const fallback = vi;

export const trans = (key: string): string => {
  const value = get(lang, key, key);
  if (value === key || !value) {
    return get(fallback, key, key);
  }

  return value;
};
