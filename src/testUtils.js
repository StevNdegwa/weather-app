import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import { reducers } from "./app/features/reducers";

export function setupApiStore(api) {

  const getStore = () =>
    configureStore({
      reducer: combineReducers({
        ...reducers,
        [api.reducerPath]: api.reducer,
      }),
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false })
          .concat(api.middleware),
    });
  return { store: getStore(), api };
}