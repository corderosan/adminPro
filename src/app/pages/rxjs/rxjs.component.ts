import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {  retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit , OnDestroy {


  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().pipe( retry(2) )
    .subscribe( numero => {console.log('subs', numero); } ,
    error => { console.error('error en el obs', error); },
    () => { console.log('termino el observable'); }
);

  }


  ngOnInit() {
  }


  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      const intervalo = setInterval( () => {

  contador += 1;

  const salida = {
    valor: contador
  };

  observer.next( salida );

  // if (contador === 3) {
  //     clearInterval( intervalo);
  //     observer.complete();
  //   }
  // if (contador === 2) {
  //     clearInterval( intervalo); // si se quita el retry opera
  //     observer.error('error en la app');
  //   }

  }, 1000);

  }).pipe( map( (resp: any) => resp.valor),
    filter( ( valor, index ) => {
      // console.log('valor', valor);
      // console.log('index',index);
      if ( (valor % 2 ) === 1) {
        //par
        return true;
      }else{
        return false;
        //impar
      }
    })

  );

  }


}
