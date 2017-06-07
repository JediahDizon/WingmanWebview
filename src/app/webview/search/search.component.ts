import { Component, trigger, state, style, transition, animate,  keyframes } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: 'search.component.html',
	styleUrls: ['search.component.css']
})
export class SearchComponent {
	searchValue: string;
	loadingProgress: boolean | number = false;

	constructor() {
		this.loadingProgress = false;
	}

	search(event) {
		this.loadingProgress = .5;

		console.log(this.searchValue);
		setTimeout(() => {
			this.loadingProgress = false;
		}, 3000);
		
	}

}
