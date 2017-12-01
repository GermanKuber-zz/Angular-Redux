import { IAppState } from '../store';

export const FILTER_COURSES = 'courses/FILTER';


export function filterCourses(searchText: string) {
    return {
        type: FILTER_COURSES,
        searchText,
    }
}
// TODO: 01 - 02 - Creo la acción