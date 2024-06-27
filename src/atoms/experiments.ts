import { atom } from "recoil";

export const canvasBackgroundState = atom<boolean>({
  key: "canvasBackgroundState",
  default: false,
});

export const hireMe = atom<boolean>({
  key: "hireMe",
  default: true,
});
