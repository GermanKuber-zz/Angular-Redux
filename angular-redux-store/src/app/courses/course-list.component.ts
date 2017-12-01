import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { IAppState, store } from '../store';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { filterCourses } from './course.actions';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Array<Course>;

  private _searchValue: string;
  public get searchValue(): string {
    return this._searchValue;
  }
  public set searchValue(search: string) {
    // TODO: 06 - Ante la búsqueda dispacho la acción
    store.dispatch(filterCourses(search));
    this._searchValue = search;
  }

  updateFromState() {
    // TODO: 04 -  Obtengo todos los cursos desde el store.
    const allState = store.getState();
    this.courses = allState.filteredCourses;
    console.log(this.courses);
  }

  ngOnInit() {
    // TODO: 05 - Me subscribo al store
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    });
  }
}
