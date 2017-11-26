import { DataTransferService } from './services/data-transfer.service';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { OnChangesChildComponent } from './components/on-changes-child/on-changes-child.component';
import { DataTransferComponent } from './components/data-transfer/data-transfer.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { NestedRoutingComponent } from './components/nested-routing/nested-routing.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { BindingComponent } from './components/binding/binding.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { GuardedComponent } from './components/guarded/guarded.component';
import { AuthService } from "./services/auth.service";
import { OneComponent } from './components/nested/one/one.component';
import { NestOneComponent } from './components/nested-routing/nest-one/nest-one.component';
import { NestTwoComponent } from './components/nested-routing/nest-two/nest-two.component';
import { NestThreeComponent } from './components/nested-routing/nest-three/nest-three.component';
import { NgContentChildComponent } from './components/ng-content-child/ng-content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesChildComponent,
    DataTransferComponent,
    AnimationsComponent,
    NestedRoutingComponent,
    NgContentComponent,
    BindingComponent,
    DashboardComponent,
    HomeComponent,
    GuardedComponent,
    NestOneComponent,
    NestTwoComponent,
    NestThreeComponent,
    NgContentChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    DataTransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
