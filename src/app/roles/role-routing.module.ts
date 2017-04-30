import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageRolesComponent } from './manage-roles/manage-roles.component';

const routes:Routes =[
  {
    path:'',
    data:{
      title:'Roles'
    },
    children:[
      {
        path:'manage',
        component:ManageRolesComponent,
        data:{
          title:'Manage'
        }
      }     
    ]
  }
];

@NgModule({
  imports:[ RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RoleRoutingModule { }
