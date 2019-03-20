import { Routes, RouterModule } from '@angular/router';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'progress', component : ProgressComponent, data: { titulo: 'Progress'} },
            {path: 'graficas1', component : Graficas1Component, data: { titulo: 'Graficas'}},
            {path: 'dashboard', component: DashboardComponent, data: { titulo: 'DashBoard'}},
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema'}},
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
            {path: 'RxJs', component: RxjsComponent, data: { titulo: 'Rs js ejemplos'}},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);


