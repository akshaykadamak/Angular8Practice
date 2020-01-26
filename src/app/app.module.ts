import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstpageComponent } from './myfirstpage/myfirstpage.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component'
import {RouterModule} from "@angular/router";
import { NgforComponent } from './ngfor/ngfor.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { ModelComponent } from './model/model.component';
import { GetdataComponent } from './AngularCrudOperation/getdata/getdata.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { PostdataComponent } from './AngularCrudOperation/postdata/postdata.component';
import { CourceNgforComponent } from './angularcourcepractice/cource-ngfor/cource-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstpageComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RoutingComponent,
    NgforComponent,
    IfelseComponent,
    CrudoperationsComponent,
    ModelComponent,
    GetdataComponent,
    ChildComponent,
    PostdataComponent,
    CourceNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
