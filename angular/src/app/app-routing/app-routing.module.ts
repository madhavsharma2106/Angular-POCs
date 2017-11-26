import { BindingComponent } from '../components/binding/binding.component';
import { NestThreeComponent } from '../components/nested-routing/nest-three/nest-three.component';
import { NestTwoComponent } from '../components/nested-routing/nest-two/nest-two.component';
import { NestOneComponent } from '../components/nested-routing/nest-one/nest-one.component';
import { NestedRoutingComponent } from '../components/nested-routing/nested-routing.component';
import { DataTransferComponent } from '../components/data-transfer/data-transfer.component';
import { AuthGuard } from '../guards/auth.guard';
import { GuardedComponent } from '../components/guarded/guarded.component';
import { OnChangesComponent } from '../components/on-changes/on-changes.component';
import { NgContentComponent } from '../components/ng-content/ng-content.component';
import { HomeComponent } from '../components/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsComponent } from '../components/animations/animations.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'on-changes', component: OnChangesComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'data-transfer', component: DataTransferComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'guarded',canActivate: [AuthGuard], component: GuardedComponent },
  { path: 'nested-routing', component: NestedRoutingComponent,
    children:[
      { path: 'nest-one', component: NestOneComponent },
      { path: 'nest-two', component: NestTwoComponent },
      { path: 'nest-three', component: NestThreeComponent },
    ]
},
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
