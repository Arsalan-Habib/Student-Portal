import { createStore, combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import {
	studentDetailsReducer,
	studentResultsReducer,
} from "./state/reducers/studentReducer";
import { staffDetailsReducer } from "./state/reducers/staffReducer";

const initialState = {
	// student login and authentication details
	studentDetails: {
		loading: false,
		error: null,
		accessToken: null,
		student: {},
	},
	// for all results
	studentResults: {
		loading: true,
		error: null,
		results: [],
	},
	// staff details
	staffDetails: {
		loading: false,
		error: null,
		staff: {},
	},
};

const middleware = [thunk];

const reducer = combineReducers({
	studentDetails: studentDetailsReducer,
	studentResults: studentResultsReducer,
	staffDetails: staffDetailsReducer,
});

// REDUX PERSIST SETUP
const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export let store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export let persistor = persistStore(store);
