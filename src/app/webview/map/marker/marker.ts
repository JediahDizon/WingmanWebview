import { Establishment } from '../establishment/establishment';

export class Marker {
	establishment: Establishment

	longitude: number;
	latitude: number;
	draggable: boolean;
	
	constructor(latitude: number, longitude: number, establishment: Establishment) {
		this.establishment = establishment;
		this.longitude = longitude;
		this.latitude = latitude;
		this.draggable = false;
	}
}