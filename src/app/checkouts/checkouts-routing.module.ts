import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCheckoutsComponent } from './manage-checkouts/manage-checkouts.component';

const routes:Routes=[
  {
    path:'',
    data:{
      title:"Checkouts"
    },
    children:[
      {
        path:'manage',
        component:ManageCheckoutsComponent,
        data:{
          title:'Manage'
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CheckoutsRoutingModule { }
