export class Client {
	id				: number;
	firstname		: string;
	surname			: string;
	phone			: string;
	email			: string;
	creation_date	: string;
	last_update		: string;
	active			: boolean;

	constructor(clientJSON) {
		clientJSON = Client.sanitizeEstablishment(clientJSON);

		this.id				= clientJSON.id;
		this.firstname		= clientJSON.firstname;
		this.surname		= clientJSON.surname;
		this.phone			= clientJSON.phone;
		this.email			= clientJSON.email;
		this.creation_date	= clientJSON.creation_date;
		this.last_update	= clientJSON.last_update;
		this.active			= clientJSON. active;
	}

	static sanitizeEstablishment(clientJSON) {
		let toSanitize = clientJSON;

		/* Math.Floor() is 50x faster than ParseInt() when converting to integers */
		toSanitize.id = Math.floor(toSanitize.id);
		toSanitize.firstname = encodeURI(toSanitize.firstname);
		toSanitize.surname = encodeURI(toSanitize.surname);
		toSanitize.phone = encodeURI(toSanitize.phone);
		toSanitize.email = encodeURI(toSanitize.email);
		toSanitize.creation_date = encodeURI(toSanitize.creation_date);
		toSanitize.last_update = encodeURI(toSanitize.last_update);
		toSanitize.active = !!toSanitize.active;
		
		return toSanitize;
	}
}