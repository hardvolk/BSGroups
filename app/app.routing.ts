import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MapComponent } from "./map/map.component";

const routes: Routes = [
    { path: 'map', component: MapComponent },
    { path: '', redirectTo: 'map', pathMatch: 'full' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [
    MapComponent
];