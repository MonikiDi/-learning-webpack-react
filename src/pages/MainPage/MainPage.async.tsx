import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Так делать не надо
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
