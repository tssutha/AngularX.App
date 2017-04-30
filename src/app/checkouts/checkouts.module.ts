import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutsRoutingModule } from './checkouts-routing.module';

import { ManageCheckoutsComponent } from './manage-checkouts/manage-checkouts.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutsRoutingModule
  ],
  declarations: [
    ManageCheckoutsComponent
  ]
})
export class CheckoutsModule { }
