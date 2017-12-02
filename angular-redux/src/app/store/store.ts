import { createStore, compose, GenericStoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';


// TODO: 03 - Creo el Store
export const store =  createStore<IAppState>(reducer);





//TODO: 07 - Registro DevTools Extensions Redux
// declare var window: any;

// console.log(window.devToolsExtension);
// const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
//     ? window.devToolsExtension() : (f) => f;

// export const store = createStore<IAppState>(reducer,
//     compose(devToolsExtension) as GenericStoreEnhancer);