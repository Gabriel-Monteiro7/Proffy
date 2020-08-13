import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers:any) => {
  const persistedReducer = persistReducer(
    {
      key: "proffy",
      storage,
      whitelist: ["teacher"],
    },
    reducers
  );
  return persistedReducer;
};