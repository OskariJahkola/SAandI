export class Coords {
    latitude: number;
	longitude: number;
	accuracy: number;

	constructor(latitude: number, longitude: number, accuracy: number) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.accuracy = accuracy;
	}

	distance(to: Coords): number {
		const R = 6371;
		const lat1 = this.latitude * Math.PI / 180, lat2 = to.latitude * Math.PI / 180;
		const dLat = lat2 - lat1;
		const dLong = (to.longitude - this.longitude) * Math.PI / 180;
		const a =  Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLong / 2), 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const d = R * c;
		return d;
	}
}