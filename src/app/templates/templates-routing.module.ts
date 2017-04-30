import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ManageTemplatesComponent } from './manage-templates/manage-templates.component';

const routes:Routes =[
  {
    path:'',
    data:{
      title:'Templates'
    },
    children:[
      {
        path:'manage',
        component:ManageTemplatesComponent,
        data:{
          title:'Manage'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class TemplatesRoutingModule { }
