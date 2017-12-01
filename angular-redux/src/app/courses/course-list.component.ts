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
  public set searchValue(v: string) {
    store.dispatch(filterCourses(v));
    this._searchValue = v;
  }

  updateFromState() {
    const allState = store.getState();
    this.courses = allState.filteredCourses;
    console.log(this.courses);
  }

  ngOnInit() {
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    });
  }
}
