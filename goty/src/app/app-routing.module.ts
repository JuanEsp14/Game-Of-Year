import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes =
[
    { path: "inicio", component: InicioComponent },
    { path: "goty", component: GotyComponent },
    { path: "**", pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule
    (
    {
        exports: [RouterModule],
        imports: [RouterModule.forChild(routes)],
    }
    )
export class AppRoutingModule{}

export const ROUTES = RouterModule.forRoot( routes );