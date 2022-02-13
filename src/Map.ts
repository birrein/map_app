export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: parseInt(mappable.getLocation.lat),
        lng: parseInt(mappable.getLocation.lng),
      },
    });
  }
}
