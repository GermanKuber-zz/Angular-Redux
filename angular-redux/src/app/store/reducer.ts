import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from '../courses/course.actions';

const courses = [
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
];

const initialState: IAppState = {
  courses,
  filteredCourses: courses
};

function filterCourses(state, action): IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => {
      return c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1;
    }),
  });
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    default:
      return state;
  }
}