import { createStore, combineReducers } from "redux";

let initialData = []

function transReducer(olData = initialData, newData){
   
    if(newData.type == "TRANS_ADDED"){
        olData.push(newData.payload);
    }else if(newData.type == "TRANS_DELETED"){
        olData.splice(newData.payload,1)
    }

    return [...olData];

}
function userReducer(olData = initialData, newData){
   
   

    return {};

}


let bigREducer = combineReducers({transReducer,userReducer});


let meraStore = createStore(bigREducer);

export default meraStore;