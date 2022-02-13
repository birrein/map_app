import { Passenger } from './Passenger';
import { Driver } from './Driver';
import { Map } from './Map';
import { MyHome } from './MyHome';

const map = new Map('map');
const driver = new Driver();
const passenger = new Passenger();
const myHome = new MyHome(passenger);

map.addMarker(driver);
map.addMarker(passenger);
map.addMarker(myHome);

map.searchText({
  input: <HTMLInputElement>document.getElementById('address'),
  searchButton: <HTMLButtonElement>document.getElementById('btnSearch'),
});
