import { User } from "./User";
import { Company } from "./Company";

// instructions to other classes how be an argument for 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(mapDivId) as HTMLElement,
      {
        center: {
          lat: 46,
          lng: 32,
        },
        zoom: 1,
      }
    );
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
