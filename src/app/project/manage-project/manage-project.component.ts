import { Component, OnInit } from '@angular/core';
import {MenuModule,MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.scss']
})
export class ManageProjectComponent implements OnInit {
  items: MenuItem[];

  constructor() { 
    this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
        ];
  }

  ngOnInit() {
  }

  save():void{

  }
  update():void{

  }
  delete():void{
    
  }

}
