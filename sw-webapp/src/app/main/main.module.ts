import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MainRoutingModule } from "./main-routing.module";



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
