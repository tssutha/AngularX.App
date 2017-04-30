import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CreateProjectComponent } from './create-project/create-project.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';

const routes:Routes = [
  {
    path:'',
    data:{
      title:'Project'
    },
    children:[
      {
        path:'create',
        component:CreateProjectComponent,
        data:{
          title:'Create'
        }
      },
      {
        path:'manage',
        component:ManageProjectComponent,
        data:{
          title:'Manage'
        }
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]  
})
export class ProjectRoutingModule { }
