import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module'; 
import { ManageTemplatesComponent } from './manage-templates/manage-templates.component';


@NgModule({
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ],
  declarations: [ManageTemplatesComponent]
})
export class TemplatesModule { }
