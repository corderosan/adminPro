import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  menu: any = [
    {
    titulo: 'Principal',
    icono: 'mdi mdi-gaude',
    submenu: [
      {titulo: 'DashBoard', url: '/dashboard'},
      {titulo: 'ProgressBar', url: '/progress'},
      {titulo: 'Graficas', url: 'graficas1'},
    ]
  }
  ];

  constructor( public _sideBar: SidebarService) { }

}



