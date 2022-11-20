import { clone } from "ramda";

export const deepClone = (obj) => {
  return clone(obj);
};
