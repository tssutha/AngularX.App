import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RoleRoutingModule } from './role-routing.module';

import { ManageRolesComponent } from './manage-roles/manage-roles.component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule
  ],
  declarations: [ManageRolesComponent]
})
export class RolesModule { }
