import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
      // console.log(this.leyenda);
       console.log(this.progreso);
   }

  ngOnInit() {
    console.log(this.progreso);
  }

  onChange( newValue: number) {
    console.log(newValue);

    //let elemHTML: any = document.getElementsByName('progreso')[0];
    //console.log(this.txtProgress);

    if (newValue >= 100) { this.progreso = 100; }
    else if (newValue <= 0) { this.progreso = 0; }
    else { this.cambioValor.emit( this.progreso ); }

    //elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
  }

  cambiarValor( valor ) {

    if (this.progreso >= 100 && valor > 0) { return; }

    if (this.progreso <= 0 && valor < 0) { return; }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }

}
