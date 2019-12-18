import {takeEvery} from 'redux-saga/effects'
import {sagas as home} from '../pages/'

let {GEILIST} =home.types

function* sagas(){
    yield takeEvery(GEILIST,home.action)
}

export default sagas