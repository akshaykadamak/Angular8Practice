import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterpolationComponent} from "./interpolation/interpolation.component";
import {EventbindingComponent} from "./eventbinding/eventbinding.component";
import {PropertybindingComponent} from "./propertybinding/propertybinding.component";
import {TwowaybindingComponent} from "./twowaybinding/twowaybinding.component";
import {IfelseComponent} from "./ifelse/ifelse.component";
import {NgforComponent} from "./ngfor/ngfor.component";
import {CrudoperationsComponent} from "./crudoperations/crudoperations.component";
import {ModelComponent} from "./model/model.component";
import {GetdataComponent} from "./AngularCrudOperation/getdata/getdata.component";
import {PostdataComponent} from "./AngularCrudOperation/postdata/postdata.component";
import {CourceNgforComponent} from "./angularcourcepractice/cource-ngfor/cource-ngfor.component";


const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'eventbinding', component: EventbindingComponent},
  {path: 'propertybinding', component: PropertybindingComponent},
  {path: 'twowaybinding', component: TwowaybindingComponent},
  {path: 'ifelse', component: IfelseComponent},
  {path: 'ngfor', component: NgforComponent},
  {path: 'angularcrud', component: CrudoperationsComponent},
  {path: 'model', component: ModelComponent},
  {path: 'getdata', component: GetdataComponent},
  {path: 'postdata', component: PostdataComponent},
  {path: 'cource-ngfor', component: CourceNgforComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
