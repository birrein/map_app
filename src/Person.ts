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
