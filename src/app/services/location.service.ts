import { Injectable, signal } from "@angular/core";

export const LOCATIONS: string = "locations";

@Injectable({ providedIn: "root" })
export class LocationService {
  private $locations = signal<string[]>([]);
  locations = this.$locations.asReadonly();

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.$locations.set(JSON.parse(locString));
    }
  }

  addLocation(zipcode: string) {
    let locations = [...this.$locations()];
    if (!locations.includes(zipcode)) {
      locations.push(zipcode);
      this.$locations.set(locations);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }

  removeLocation(removeIndex: number) {
    let locations = [...this.$locations()];
    const zipcode = locations[removeIndex];
    let index = locations.indexOf(zipcode);
    if (index !== -1) {
      locations.splice(index, 1);
      this.$locations.set(locations);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
}
