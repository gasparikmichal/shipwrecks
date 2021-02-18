import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from "./services/api.service";
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ApiService,

  ]
})
export class SharedModule { }
