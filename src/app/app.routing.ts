import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { AuthGuardService } from './shared/services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },    
    canActivate:[AuthGuardService],
    children: [   
      {
        path: 'dashboard',
        canActivate:[AuthGuardService],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'project',
        canActivate:[AuthGuardService],
        loadChildren: './project/project.module#ProjectModule'
      }, 
      {
        path:'users',
        canActivate:[AuthGuardService],
        loadChildren: './user/user.module#UserModule'
      },
      {
        path:'roles',
        canActivate:[AuthGuardService],
        loadChildren: './roles/roles.module#RolesModule'
      },
      {
        path:'templates',
        canActivate:[AuthGuardService],
        loadChildren: './templates/templates.module#TemplatesModule'
      },
      {
        path:'checkouts',
        canActivate:[AuthGuardService],
        loadChildren: './checkouts/checkouts.module#CheckoutsModule'
      }      
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
