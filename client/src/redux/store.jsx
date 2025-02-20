import { legacy_createStore } from "redux";
import { Reducer } from "./reducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

export const store = legacy_createStore(Reducer, applyMiddleware(logger));
