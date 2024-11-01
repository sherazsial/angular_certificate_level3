import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ZipcodeEntryComponent } from "./components/zipcode-entry/zipcode-entry.component";
import { ForecastsListComponent } from "./components/forecasts-list/forecasts-list.component";
import { CurrentConditionsComponent } from "./components/current-conditions/current-conditions.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { LocationService } from "./services/location.service";
import { WeatherService } from "./services/weather.service";
import { TabGroupComponent } from "./shared/components/tab-group/tab-group.component";
import { CacheService } from "./services/cache.service";

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production,
    }),
    TabGroupComponent,
  ],
  providers: [LocationService, WeatherService, CacheService],
  bootstrap: [AppComponent],
})
export class AppModule {}
