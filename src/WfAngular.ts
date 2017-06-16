import {Injectable} from '@angular/core';
import {WfBroadcaster} from './WfBroadcaster';

declare var Wayfinder2D: any;

@Injectable()
export class WfAngular {
	wf;
	constructor(private broadcaster: WfBroadcaster) {
		if(!this.wf)
			this.wf = new Wayfinder2D();
		var scope = this;

		this.wf.cbOnDataLoaded = function(){
			scope.broadcaster.broadcast('wf.data.loaded', []);
		}

		this.wf.cbOnPOIClick = function(poi) {
			scope.broadcaster.broadcast('wf.poi.click', poi);
		};

		this.wf.cbOnLanguageChange = function(language) {
			scope.broadcaster.broadcast('wf.language.change', language);
		};

		this.wf.cbOnFloorChange = function(floor) {
			scope.broadcaster.broadcast('wf.floor.change', floor);
		};

		this.wf.cbOnZoomChange = function(zoom) {
			scope.broadcaster.broadcast('wf.zoom.change', zoom);
		};

		this.wf.cbOnBeforeFloorChange = function(currentFloor, nextFloor, destinationFloor) {
			scope.broadcaster.broadcast('wf.path.floor.change', {
				current: currentFloor,
				next: nextFloor,
				destination: destinationFloor
			});
		};

		this.wf.cbOnTouch = function(type, value) {
			scope.broadcaster.broadcast('wf.touch', {
				type: type,
				value: value
			});
		};

		this.wf.cbOnMapReady = function() {
			scope.broadcaster.broadcast('wf.map.ready', []);
		};

		this.wf.cbOnPathFinished = function(path) {
			scope.broadcaster.broadcast('wf.path.finished', path);
		};

		return this.wf;
    }
}