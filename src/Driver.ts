import faker from '@faker-js/faker';
import { Person } from './Person';

/**
 * Passenger class
 */
export class Driver extends Person {
  /**
   * Constructor
   */
  constructor() {
    super(faker.name.firstName(), {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });
  }
}
