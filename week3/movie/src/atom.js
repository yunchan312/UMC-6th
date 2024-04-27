import { atom } from "recoil";

export const currMovieState = atom({
  key: "currMovieState",
  default: [],
});

export const navState = atom({
  key: "navState",
  default: 0,
});
