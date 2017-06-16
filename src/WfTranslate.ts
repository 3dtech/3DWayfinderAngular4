import {Pipe, PipeTransform} from '@angular/core';
import {WfAngular} from './WfAngular';

@Pipe({name: 'wfTranslate'})
export class WfTranslate implements PipeTransform {
	wayfinder;

	constructor(private wfAngular: WfAngular){
		this.wayfinder = wfAngular;
	}
  	transform(input: object): string {
	    if (input[this.wayfinder.getLanguage()]) {
	            return input[this.wayfinder.getLanguage()];
        } else if (input["translations"] && input["translations"][this.wayfinder.getLanguage()]) {
            return input["translations"][this.wayfinder.getLanguage()];
        } else {
            return "";
        }
	}
}