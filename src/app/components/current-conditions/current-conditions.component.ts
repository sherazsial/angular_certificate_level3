import { Component, computed, inject, Signal } from "@angular/core";
import { ConditionsAndZip } from "../../types/conditions-and-zip.type";
import { WeatherService } from "../../services/weather.service";
import { LocationService } from "../../services/location.service";
import { Tab } from "../../shared/components/tab-group/tab-group.component";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"],
})
export class CurrentConditionsComponent {
  protected locationService = inject(LocationService);
  protected weatherService = inject(WeatherService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
    this.weatherService.getCurrentConditions();
  tabs = computed(() => {
    return this.currentConditionsByZip().map(
      (conditions) =>
        <Tab>{ title: `${conditions.data.name} (${conditions.zip})` },
    );
  });
}
