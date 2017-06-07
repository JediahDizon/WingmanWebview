import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class Backend {

	constructor(private http: Http) {
	}

	getMarkers() {
		let requestHeaders = new Headers();
		requestHeaders.set("Content-Type", "JSON");
		
		return this.http.get("https://wingmanapi.fagyapong.ca/api/v1/establishment/all", {
			headers: requestHeaders
		});
	}

	/* -------------- */
	/* TEST FUNCTIONS */
	/* -------------- */
	getEstablishments() {
		let requestHeaders = new Headers();
		requestHeaders.set("Content-Type", "JSON");

		return this.http.get("https://wingmanapi.fagyapong.ca/api/v1/establishment/all", {
			headers: requestHeaders
		});
	}

	getClient(clientId: number) {
		let requestHeaders = new Headers();
		requestHeaders.set("Content-Type", "JSON");

		return this.http.get("https://wingmanapi.fagyapong.ca/api/v1/client/" + clientId, {
			headers: requestHeaders
		});
	}


	postMarker(toSubmit) {

	}
}