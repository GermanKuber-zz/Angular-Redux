import { Course } from '../courses/course';
// TODO: 01 - Creo el estado de mi aplicación
export interface IAppState {
    courses: Course[];
    filteredCourses: Course[]
}
