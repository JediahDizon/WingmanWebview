import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import { Marker } from './marker/marker';
import { Client } from './client/client';
import { Establishment } from './establishment/establishment';
import { Backend } from './backend/backend.service';

@Component({
	selector: 'app-map',
	templateUrl: 'map.component.html',
	styleUrls: ['map.component.css'],
	providers: [Backend]
})
export class MapComponent implements OnInit {
	liveTrack: boolean;
	mapMarkers: Marker[];

	mapProperties: {
		longitude: number;
		latitude: number;
		zoom: number;
		disableDefaultUI: boolean;
		zoomControl: boolean;
		streetViewControl: boolean;
		usePanning: boolean;
	};
	
	positionCircle: {
		longitude: number,
		latitude: number,
		fillColor: string,
		fillOpacity: number,
		radius: number
	};

	ngOnInit() {
		this.liveTrack = true;
		this.mapMarkers = [];
		this.mapProperties = {
			longitude: 0,
			latitude: 0,
			zoom: 1,
			disableDefaultUI: true,
			zoomControl: false,
			streetViewControl: false,
			usePanning: true
		};
		
		this.positionCircle = {
			longitude: 0,
			latitude: 0,
			fillColor: "#96BEFF",
			fillOpacity: .5,
			radius: 4
		};
	}

	constructor(private backendService: Backend) {
		if (!!navigator.geolocation) {
			/*
			We assign "this" to a seperate variable and use it inside the callback function because the context of "this"
			inside the callback is different than the "this" of the MapComponent
			*/
			let weatherComponent = this;

			navigator.geolocation.watchPosition(function (positionData) {
				if (weatherComponent.liveTrack) {
					weatherComponent.mapProperties.longitude = positionData.coords.longitude;
					weatherComponent.mapProperties.latitude = positionData.coords.latitude;
					weatherComponent.mapProperties.zoom = 15;
				}
				weatherComponent.positionCircle.longitude = positionData.coords.longitude;
				weatherComponent.positionCircle.latitude = positionData.coords.latitude;
				weatherComponent.positionCircle.radius = positionData.coords.accuracy;
			}, function (error) {
				weatherComponent.positionCircle.latitude = 0;
				weatherComponent.positionCircle.longitude = 0;
				weatherComponent.positionCircle.longitude = 0;
				weatherComponent.mapProperties.latitude = 0;
				weatherComponent.mapProperties.longitude = 0;
				switch (error.code) {
					case error.PERMISSION_DENIED:
						console.error("Permission Denied");
						break;
					case error.POSITION_UNAVAILABLE:
						console.error("Location information is unavailable.");
						break;
					case error.TIMEOUT:
						console.error("The request to get user location timed out.");
						break;
				}
			}, {
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0
				});
		}
	}

	public toggleLiveTrack() {
		this.liveTrack = !this.liveTrack;
		if (this.liveTrack === true) {
			this.mapProperties.latitude = this.positionCircle.latitude;
			this.mapProperties.longitude = this.positionCircle.longitude;
		}
	}

	public disableLiveTrack(event) {
		this.liveTrack = false;
	}

	public centerChange(event) {
		this.mapProperties.latitude = event.lat;
		this.mapProperties.longitude = event.lng;
	}


	/* -------------- */
	/* TEST FUNCTIONS */
	/* -------------- */
	clientList: Client[];

	public testMarker() {
		this.backendService.getMarkers().subscribe(
			(response: Response) => {
				this.mapMarkers = [];
				let markerList = response.json();
				for (let index = 0; index < markerList.length; index++) {
					let establishment = new Establishment(markerList[index]);
					let latitude = markerList[index].location_coord.lat;
					let longitude = markerList[index].location_coord.lon;
					this.addMarker(new Marker(latitude, longitude, establishment));
				}
			}
		)
	}

	public testClient() {
		let clientId = 1;
		this.backendService.getClient(clientId).subscribe(
			(response: Response) => {
				let client = new Client(response.json());
				this.addClient(client);
			}
		)
	}

	public addClient(toAdd: Client) {
		this.clientList.push(toAdd);
	}

	public removeClient() {
		this.mapMarkers.pop();
	}

	public addMarker(toAdd: Marker) {
		this.mapMarkers.push(toAdd);
	}

	public removeMarker() {
		this.mapMarkers.pop();
	}

	clicked(event) {
		console.log(event);
	}
}