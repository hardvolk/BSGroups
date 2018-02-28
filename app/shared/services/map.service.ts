import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { IMap } from './../interfaces/map.interface';


@Injectable()
export class MapService {
    
    bsgLocations: IMap[] = [
        { latitude: 25.728029, longitude: -100.309526, name: 'FACPyA Group'},
        { latitude: 25.727076, longitude: -100.310038, name: 'Filo Group'},
        { latitude: 25.725018, longitude: -100.313463, name: 'FIME Group'},
        { latitude: 25.725827, longitude: -100.315145, name: 'FCFM Group'}

    ];
    
    
    constructor() { }

    getBSGroups(): Observable<IMap> {
        return Observable.from(this.bsgLocations);
    }


    
}