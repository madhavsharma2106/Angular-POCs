import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LazyComponent } from './components/lazy/lazy.component';

const routes: Routes = [
    { path: '', redirectTo: 'lazy', pathMatch: 'full' },
   {path:'lazy', component: LazyComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
