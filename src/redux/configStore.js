import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
// cài đặt middleware redux thunk
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  // Nơi định nghĩa các reducer trong hệ thống
  QuanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
