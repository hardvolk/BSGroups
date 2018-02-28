"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_service_1 = require("../shared/services/map.service");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
var MapComponent = /** @class */ (function () {
    function MapComponent(page, _mapService) {
        this.page = page;
        this._mapService = _mapService;
        this.groupList = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        this._mapService.getBSGroups().subscribe(function (groups) { return _this.groupList.push(groups); });
    };
    MapComponent.prototype.onMapReady = function (args) {
        console.log('Map is ready!');
        this.map = args.map;
        this.drawMarkers();
    };
    MapComponent.prototype.drawMarkers = function () {
        var _this = this;
        console.log('-------- Drawing Markers ---------');
        this.groupList.forEach(function (loc) {
            _this.map.addMarkers([
                {
                    lat: loc.latitude,
                    lng: loc.longitude,
                    title: loc.name,
                    iconPath: 'map/marker_icon.png',
                    onTap: _this.onTap
                }
            ]);
        });
        this.map.setCenter({
            lat: this.groupList[1].latitude,
            lng: this.groupList[1].longitude
        });
    };
    MapComponent.prototype.onTap = function (marker) {
        console.dir(marker);
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            templateUrl: 'map/map.component.html',
            styleUrls: ['map/map.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, map_service_1.MapService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
