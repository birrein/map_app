/**
 *
 */
export abstract class Person implements Mappable {
  protected name: string;
  protected location: {
    lat: string;
    lng: string;
  };

  get getLocation() {
    return this.location;
  }

  markerTitle(address: () => string): string {
    return `La dirección de ${this.name} es ${address()}`;
  }

  /**
   *
   * @param {string} name
   * @param {location} location
   */
  constructor(name: string, location: { lat: string; lng: string }) {
    this.name = name;
    this.location = location;
  }
}
