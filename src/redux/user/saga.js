import {put, call, select, fork, takeLatest, all} from "redux-saga/effects";
import { ONLOGGIN, onLoginSuccess, onLoginFailed } from "./actions";
import { isAuthenticatedAdm, isAuthenticatedPhysio, login, logout } from "../../service/Auth";
import api from "../../service/Api";
import history from "../../history";

function* onLoggin({email, password}) {
    
    try {
        const response = yield api.post("auth/login", { email, password });
        console.log("Dados: ", email, password);
        console.log("Response: ", response);
        console.log("ADM: ",isAuthenticatedAdm());
        console.log("PHYSIO: ",isAuthenticatedPhysio());

        yield put(onLoginSuccess(response.data));
        login(response.data.token);
        history.push('/physiotherapist');
        window.location.reload();
        
    }catch(error){
        yield put(onLoginFailed(error));
    }
}

export default all([ 
    takeLatest(ONLOGGIN, onLoggin)
])