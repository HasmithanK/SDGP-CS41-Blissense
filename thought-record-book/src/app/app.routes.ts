import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyRecordsComponent } from './my-records/my-records.component';

export const routes: Routes = [
  { path: '', redirectTo: '/thought-record-book', pathMatch: 'full' },
  { path: 'thought-record-book', component: AppComponent },
  { path: 'my-records', component: MyRecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
