export class Establishment {
	public id			: number;
	public client_id	: number;
	public name			: string;
	public phone		: string;
	public street_name	: string;
	public street_number: string;
	public city			: string;
	public quadrant		: string;
	public province		: string;
	public postal_code	: string;

	constructor(establishmentJSON) {
		establishmentJSON	= Establishment.sanitizeEstablishment(establishmentJSON);
		this.id				= establishmentJSON.id;
		this.client_id		= establishmentJSON.client_id;
		this.name			= establishmentJSON.name;
		this.phone			= establishmentJSON.phone;
		this.street_name	= establishmentJSON.street_name;
		this.street_number	= establishmentJSON.street_number;
		this.city			= establishmentJSON.city;
		this.quadrant		= establishmentJSON.quadrant;
		this.province		= establishmentJSON.province;
		this.postal_code	= establishmentJSON.postal_code;
	}

	static sanitizeEstablishment(establishmentJSON) {
		let toSanitize = establishmentJSON;

		/* Math.Floor() is 50x faster than ParseInt() when converting to integers */
		toSanitize.id				= Math.floor(toSanitize.id);
		toSanitize.client_id		= Math.floor(toSanitize.client_id);
		toSanitize.name				= encodeURI(toSanitize.name);
		toSanitize.phone			= encodeURI(toSanitize.phone);
		toSanitize.street_name		= encodeURI(toSanitize.street_name);
		toSanitize.street_number	= encodeURI(toSanitize.street_number);
		toSanitize.city				= encodeURI(toSanitize.city);
		toSanitize.quadrant			= encodeURI(toSanitize.quadrant);
		toSanitize.province			= encodeURI(toSanitize.province);
		toSanitize.postal_code		= encodeURI(toSanitize.postal_code);

		return toSanitize;
	}
}
