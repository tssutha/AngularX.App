import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes:Routes= [
  {
    path:'',
    data:{
      title:'User'
    },
    children:[
      {
        path:'manage',
        component: ManageUsersComponent,
        data:{
          title:'Manage'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
