import { call, put } from 'redux-saga/effects';
import { getAllProducts } from '../../../api/products';
import { getAllProductsFailure, getAllProductsSuccess } from './actions';

export const getAllProductsSaga = function* () : any {
    try {
        const response = yield call(getAllProducts);
        yield put(getAllProductsSuccess(response.data));
    } catch (err) {
        yield put(getAllProductsFailure());
    }
}