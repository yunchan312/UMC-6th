import { atom } from "recoil";

export const currMovieState = atom({
  key: "currMovieState",
  default: [],
});

export const navState = atom({
  key: "navState",
  default: 0,
});

export const auth = atom({
  key: "auth",
  default: {},
});

export const isLogin = atom({
  key: "isLogin",
  default: false,
});

export const page = atom({
  key: "page",
  default: 1,
});
