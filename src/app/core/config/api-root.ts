import {InjectionToken} from "@angular/core";

export const API_ROOT = new InjectionToken("API ROOT PATH", {
  providedIn:'root',
  factory: () => '/bs/region-faq/ajax'
})
