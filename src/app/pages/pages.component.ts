import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
=======

>>>>>>> b8834446006257e7daee6982f6a856d2e319b975
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    init_plugins();

  }

}
