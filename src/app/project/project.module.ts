import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SplitButtonModule} from 'primeng/primeng';

import { ProjectRoutingModule } from './project-routing.module';

import { CreateProjectComponent } from './create-project/create-project.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SplitButtonModule
  ],
  declarations: [
    CreateProjectComponent,
    ManageProjectComponent
  ]
})
export class ProjectModule { }
