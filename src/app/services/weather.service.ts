import {
  effect,
  inject,
  Injectable,
  Signal,
  signal,
  untracked,
} from "@angular/core";
import { Observable, of } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Forecast } from "../types/forecast.type";
import { ConditionsAndZip } from "../types/conditions-and-zip.type";
import { CurrentConditions } from "../components/current-conditions/current-conditions.type";
import { LocationService } from "./location.service";
import { CacheService } from "./cache.service";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class WeatherService {
  static URL = "https://api.openweathermap.org/data/2.5";
  static APPID = "5a4b2d457ecbef9eb2a71e480b947604";
  static ICON_URL =
    "https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/";
  locations = inject(LocationService).locations;
  cacheService = inject(CacheService);
  private currentConditions = signal<ConditionsAndZip[]>([]);

  constructor(private http: HttpClient) {
    effect(() => {
      const difference = this.getDifference();
      untracked(() => {
        if (this.currentConditions().length > this.locations().length) {
          this.removeCurrentConditions(difference);
        } else if (this.currentConditions().length < this.locations().length) {
          this.addCurrentConditions(difference);
        }
      });
    });
  }

  addCurrentConditions(zipcode: string): void {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`;
    if (this.cacheService.get(url)) {
      const data = <CurrentConditions>this.cacheService.get(url);
      this.updateCurrentConditions(zipcode, data);
    } else {
      this.http.get<CurrentConditions>(url).subscribe((data) => {
        this.updateCurrentConditions(zipcode, data);
        this.cacheService.set(url, data);
      });
    }
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`;
    if (this.cacheService.get(url)) {
      const data = <Forecast>this.cacheService.get(url);
      return of(data);
    } else {
      return this.http
        .get<Forecast>(url)
        .pipe(tap((data) => this.cacheService.set(url, data)));
    }
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232) {
      return WeatherService.ICON_URL + "art_storm.png";
    } else if (id >= 501 && id <= 511) {
      return WeatherService.ICON_URL + "art_rain.png";
    } else if (id === 500 || (id >= 520 && id <= 531)) {
      return WeatherService.ICON_URL + "art_light_rain.png";
    } else if (id >= 600 && id <= 622) {
      return WeatherService.ICON_URL + "art_snow.png";
    } else if (id >= 801 && id <= 804) {
      return WeatherService.ICON_URL + "art_clouds.png";
    } else if (id === 741 || id === 761) {
      return WeatherService.ICON_URL + "art_fog.png";
    } else {
      return WeatherService.ICON_URL + "art_clear.png";
    }
  }

  removeCurrentConditions(zipcode: string) {
    this.currentConditions.update((conditions) => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) {
          conditions.splice(+i, 1);
        }
      }
      return conditions;
    });
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  private updateCurrentConditions(zip: string, data: CurrentConditions) {
    this.currentConditions.update((conditions) => [
      ...conditions,
      { zip, data },
    ]);
  }

  private getDifference() {
    const locations = this.locations();
    const set1 = new Set(
      this.currentConditions().map((condition) => condition.zip),
    );
    const set2 = new Set(locations);
    const difference = [
      ...this.currentConditions()
        .map((condition) => condition.zip)
        .filter((item) => !set2.has(item)),
      ...locations.filter((item) => !set1.has(item)),
    ];
    return difference[0];
  }
}
