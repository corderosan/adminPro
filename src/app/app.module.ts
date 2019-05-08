import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { APP_ROUTES } from './app.route';

// Modulos
import { PagesModule } from './pages/pages.modulo';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings/settings.service';
import { ServiceModule } from './services/service.module';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
// import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RxjsComponent,
    //GraficoDonaComponent,
    // IncrementadorComponent,
  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule, FormsModule, ServiceModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
