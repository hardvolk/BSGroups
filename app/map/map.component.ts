import { Component, OnInit } from '@angular/core';
import { IMap } from '../shared/interfaces/map.interface';
import {  MapService  } from '../shared/services/map.service';
import { MapboxViewApi, Viewport as MapboxViewport } from "nativescript-mapbox";
import { Page } from "ui/page";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);


@Component({
    selector: 'app-map',
    templateUrl: 'map/map.component.html',
    styleUrls: ['map/map.component.css']
})

export class MapComponent implements OnInit {
    
    constructor(private page: Page, private _mapService: MapService) { }

    groupList: IMap[] = [];
    map: MapboxViewApi;

    ngOnInit() { 
        this.page.actionBarHidden = true;
        this._mapService.getBSGroups().subscribe( groups => this.groupList.push(groups) );
    }

    onMapReady(args): void {
        console.log('Map is ready!');
        this.map = args.map;
        this.drawMarkers();
    }

    drawMarkers(): void {
        console.log('-------- Drawing Markers ---------');
        this.groupList.forEach(loc => {
            this.map.addMarkers([
                {
                    lat: loc.latitude,
                    lng: loc.longitude,
                    title: loc.name,
                    iconPath: 'map/marker_icon.png',
                    onTap: this.onTap
                }
            ]);
        });
        this.map.setCenter({
            lat: this.groupList[1].latitude,
            lng: this.groupList[1].longitude
        });
    }

    onTap(marker): void {
        console.dir(marker);
    }
}