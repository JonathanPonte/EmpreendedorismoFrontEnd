import storage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer({
        key: 'projEmpre',
        storage,
        whitelist: []
    }, reducers);

    return persistedReducer;
}