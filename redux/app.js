//TODO: 04 -  Importo los componentes de Redux necesarios
// const { createStore, applyMiddleware } = require('redux');

//TODO: 08 - Creo un middleware, para loguear todas las acciones 
// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('state after action', store.getState())
//   return result
// }

//TODO: 01 -  Creo el State de mi aplicación
const defaultState = {
  courses: [
    {
      name: 'Redux',
      topic: 'Muy bueno!!',
    },
    {
      name: 'Angular 5',
      topic: 'Ya estamos en la versión 5 ? :O',
    },
    {
      name: 'Redux y Angular',
      topic: 'Una locura!!',
    }
  ]
};


//TODO: 05 - Creo el reducer
//Manejo la acción de ADD_COURSE 
//este se encargara de recibir las accionen y dispachearlas con el estado correspondiente.
//calculo el nuevo estado en base a la acción recibida
// // function reducer(state, action) {
// //   switch (action.type) {
// //     case 'ADD_COURSE':
// //       return Object.assign({}, state, {
// //         courses: [...state.courses, action.course]
// //       });
// //     default:
// //       return state;
// //   }
// // }



//TODO: 06 - Creo mi store
//Reducer: es quien se encargara de ejecutar todas las acciones, para actualizar nuestro estado  
//DefaultState: estado por defecto
// const store = createStore(reducer, defaultState);

//TODO: 09 - Inyecto el middelware en mi store
// const store = createStore(reducer, defaultState, applyMiddleware(logger));

//TODO: 02 - Creo las vistas que deberían actualizarse cuando el estado cambia 
function addView(viewFunc) {
  viewFunc(defaultState);
  
  // viewFunc(store.getState());
  //TODO: 07 - Me subscribo al store para reaccionar cuando se produce un cambio en el estado
  //Cuando el estado cambia, se llama a la función de mostrar vista
  // store.subscribe(() => {
  //   viewFunc(store.getState());
  // })
}


//TODO: 03 -  Ejecuto mi vistas
addView((state) => {
  console.log(`Hay ${state.courses.length} cursos en nuestra librería`);
});

addView((state) => {
  console.log(`El curso mas nuevo de la librería es : ${state.courses[state.courses.length - 1].name}`);
});


//TODO: 06 - 01 - Creo mi store
// store.dispatch({
//   type: 'ADD_COURSE',
//   course: {
//     name: 'Curso mas NUEVO !!',
//     topic: 'Workshop del Dev Fest 17'
//   }
// });

