import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CacheService {
  defaultDuration = 2 * 60 * 60 * 1000; // 2 hours, customizable

  set<T>(key: string, data: T) {
    const cacheEntry = {
      data,
      expirationTime: this.getExpirationTime(this.defaultDuration),
    };
    localStorage.setItem(key, JSON.stringify(cacheEntry));
  }

  get<T>(key: string) {
    const cachedItem = localStorage.getItem(key);
    if (!cachedItem) {
      return null;
    }

    const expirationTime = JSON.parse(cachedItem).expirationTime;
    const data = JSON.parse(cachedItem).data;
    if (Date.now() > expirationTime) {
      localStorage.removeItem(key);
      return null;
    } else {
      return data;
    }
  }

  private getExpirationTime(duration: number): number {
    return Date.now() + duration;
  }
}
