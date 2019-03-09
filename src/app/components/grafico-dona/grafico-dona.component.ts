import { Component, OnInit, Input } from '@angular/core';

interface Grafico {
  labels: string[];
  data: number[];
  type: string;
  leyenda: string;
}

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})

export class GraficoDonaComponent implements OnInit {

  @Input() grafico: Grafico;

  constructor() { }

  ngOnInit() {
  }

}
