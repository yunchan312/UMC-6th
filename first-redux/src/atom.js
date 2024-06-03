import { atom } from "recoil";

export const todoList = atom({
  key: "todoList",
  default: [],
});

export const playList = atom({
  key: "playList",
  default: [],
});

export const count = atom({
  key: "count",
  default: 1,
});

export const total = atom({
  key: "total",
  default: 276000,
});

export const isModal = atom({
  key: "modalStatus",
  default: false,
});
