import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { IAppState, store } from '../store';
import { NgModel } from '@angular/forms';
// TODO: 03 - Dependencias necesarias
import { NgRedux, select, NgReduxModule } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { filterCourses } from './course.actions';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  // TODO: 04 -  Me subscribo el estado del cual quiero ser notificado, el cual retornara un observable
  @select('filteredCourses') filteredCourses$: Observable<Course>;

  private _searchValue: string;
  public get searchValue(): string {
    return this._searchValue;
  }
  public set searchValue(search: string) {
    store.dispatch(filterCourses(search));
    this._searchValue = search;
  }

  // TODO: 05 - Inyecto el servicio
  constructor(private ngRedux: NgRedux<IAppState>) {
    
  }


  ngOnInit() {
  }
}
