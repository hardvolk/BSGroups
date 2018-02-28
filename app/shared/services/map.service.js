"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
var MapService = /** @class */ (function () {
    function MapService() {
        this.bsgLocations = [
            { latitude: 25.728029, longitude: -100.309526, name: 'FACPyA Group' },
            { latitude: 25.727076, longitude: -100.310038, name: 'Filo Group' },
            { latitude: 25.725018, longitude: -100.313463, name: 'FIME Group' },
            { latitude: 25.725827, longitude: -100.315145, name: 'FCFM Group' }
        ];
    }
    MapService.prototype.getBSGroups = function () {
        return Observable_1.Observable.from(this.bsgLocations);
    };
    MapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
