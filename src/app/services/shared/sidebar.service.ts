import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
    titulo: 'Principal',
    icono: 'mdi mdi-gaude',
    submenu: [
      {titulo: 'DashBoard', url: '/dashboard'},
      {titulo: 'ProgressBar', url: '/progress'},
<<<<<<< HEAD
      {titulo: 'Graficas', url: '/graficas1'}
=======
      {titulo: 'Graficas', url: '/graficas1'},
      {titulo: 'Promesas', url: '/promesas'},
      {titulo: 'RxJs', url: '/RxJs'}
>>>>>>> b8834446006257e7daee6982f6a856d2e319b975
    ]
  }
  ];
  constructor() { }
}
