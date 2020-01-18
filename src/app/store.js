import {createStore,combineReducers,applyMiddleware} from "redux";
import { createLogger } from 'redux-logger';
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import festRegisreduce from "./reducers/FestRegisReducer";
import NewsArticlesreduce from "./reducers/NewsArticlesReducer";
import Pathparamsreduce from "./reducers/Pathparamsreduce";
import EventsReducer from "./reducers/EventsReducer";
import ExamsReduce from "./reducers/ExamsReducer";
import CutoffsReduce from "./reducers/CutoffsReducer";
import PlacementsReduce from "./reducers/PlacementsReducer";
import EventsDetailsReduce from "./reducers/EventsDetailsReducer";
import ExamsDetailsReduce from "./reducers/ExamsDetailsReducer";
import HomeReducer from "./reducers/HomeReducer";
import NewsUploadReducer from "./reducers/NewsUploadReducer";
import svpcetUploadReducer from "./reducers/svpcetUploadReducer";





import thunk from "redux-thunk";
import promise from "redux-promise-middleware";


//export default store = createStore(combineReducers({math:mathReducer,user:userReducer}),

export default createStore(combineReducers({math:math,user:user,festRegisreduce:festRegisreduce,NewsArticlesreduce:NewsArticlesreduce,Pathparamsreduce:Pathparamsreduce,EventsReducer:EventsReducer,ExamsReduce:ExamsReduce,
CutoffsReduce:CutoffsReduce,PlacementsReduce:PlacementsReduce,EventsDetailsReduce:EventsDetailsReduce,ExamsDetailsReduce:ExamsDetailsReduce,HomeReducer:HomeReducer,NewsUploadReducer:NewsUploadReducer,svpcetUploadReducer:svpcetUploadReducer}),
{},
applyMiddleware(createLogger(),thunk)
);
