export class MapGeoCoder {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(map: google.maps.Map) {
    this.map = map;
    this.geocoder = new google.maps.Geocoder();
  }

  addMarkerInfo(marker: google.maps.Marker, mappable: Mappable): void {
    marker.addListener('click', () => {
      const latlng = {
        lat: marker.getPosition()!.lat(),
        lng: marker.getPosition()!.lng(),
      };

      this.geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerTitle(() => results[0].formatted_address),
          });
          infoWindow.open(this.map, marker);
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    });
  }

  searchText(options: SearchOptions): void {
    options.searchButton.addEventListener('click', () => {
      const address = options.input.value;
      this.geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          this.map.setCenter(results[0].geometry.location);
          this.map.setZoom(15);
          new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location,
          });
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    });
  }
}
