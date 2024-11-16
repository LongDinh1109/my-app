import { createStore } from "easy-peasy";
import storeModel from "./models/dataModels";

// Create the store
const store = createStore({
  data: storeModel,
});

export default store;
