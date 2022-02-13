import { Person } from './Person';

export class MyHome implements Mappable {
  private location: {
    lat: string;
    lng: string;
  };

  get getLocation() {
    return this.location;
  }

  markerTitle(address: () => string): string {
    return `Mi dirección es ${address()}`;
  }

  constructor(passenger: Person) {
    this.location = {
      lat: (parseInt(passenger.getLocation.lat) + 0.0002).toString(),
      lng: (parseInt(passenger.getLocation.lng) + 1).toString(),
    };
  }
}
