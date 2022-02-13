import { MapGeoCoder } from './MapGeoCoder';

export class Map {
  private googleMap: google.maps.Map;
  private geoCoder: MapGeoCoder;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });

    this.geoCoder = new MapGeoCoder(this.googleMap);
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: parseInt(mappable.getLocation.lat),
        lng: parseInt(mappable.getLocation.lng),
      },
    });

    this.geoCoder.addMarkerInfo(marker, mappable);
  }

  searchText(options: SearchOptions): void {
    this.geoCoder.searchText(options);
  }
}
