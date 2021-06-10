import { createStore, combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { studentDetailsReducer } from "./state/reducers/studentReducer";

const initialState = {
    // student login and authentication details
    studentDetails: {
        loading: false,
        error: null,
        accessToken: null,
        student: {},
    },
    // for all courses
    getCourses: {
        loading: true,
        error: null,
        courses: [],
    },
};

const middleware = [thunk];

const reducer = combineReducers({
    studentDetails: studentDetailsReducer,
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
