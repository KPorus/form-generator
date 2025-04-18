import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
