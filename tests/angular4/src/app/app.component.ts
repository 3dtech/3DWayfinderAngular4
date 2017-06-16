import { Component } from '@angular/core';
import { WfAngular, WfBroadcaster } from '../../../../4';

@Component({
  selector: 'floor-buttons',
  template: '<div *ngFor="let floor of floors" (click)=onClick(floor)>{{floor.index}}</div>'
})
export class FloorButtonComponent {
  wayfinder;
  floors = [];
  constructor(wayfinder: WfAngular, private wfBroadcaster: WfBroadcaster){
  	this.wayfinder = wayfinder;
  }

  ngOnInit(){
  	this.wfBroadcaster.on("wf.data.loaded").subscribe(message => {
  		console.log("wf-data-loaded")
        var _floors = this.wayfinder.building.getFloors();
        this.floors = Object.keys(_floors).map(function (key) { return _floors[key]; });
    });
  	
  }

  onClick(floor){
    this.wayfinder.showFloor(floor);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  wayfinder;
  constructor(wayfinder: WfAngular){
  	this.wayfinder = wayfinder;
  	console.log("Wayfinder2D", wayfinder);
  }

  ngOnInit(){
  	this.wayfinder.open("f77f3630755f36959fbea9d174ac8ca5");
  }
}


