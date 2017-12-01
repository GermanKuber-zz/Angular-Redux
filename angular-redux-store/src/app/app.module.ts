import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { FormsModule } from '@angular/forms';
// TODO: 01 - Importo el modulo necesario
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store';
// import { CourseActions } from './courses/course.actions';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // TODO: 02 -  Configuramos ngRedux
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}

