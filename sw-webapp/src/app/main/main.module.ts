import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MainRoutingModule } from "./main-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AgmCoreModule } from "@agm/core";
import { GOOGLE_MAPS_API_KEY } from "../env";

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API_KEY,
      libraries: ['geometry', 'places']
    }),
    SharedModule
  ]
})
export class MainModule { }
