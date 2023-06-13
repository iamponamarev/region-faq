import {InjectionToken, Provider} from "@angular/core";
import {FaqService} from "../services/faq.service";
import {Observable, switchMap} from "rxjs";
import {Region} from "../models/region";
import {FaqStoreService} from "../services/faq-store.service";
import {ActivatedRoute} from "@angular/router";


export const REGION_DETAIL = new InjectionToken("Get region detail by code")


const regionDetailByApiFactory = (service:FaqService, route:ActivatedRoute):Observable<Region> => {
  return route.params.pipe(
    switchMap(params => service.getByCode(params['region']))
  )
}

const regionDetailByStoreFactory = (store:FaqStoreService, route:ActivatedRoute):Observable<Region> => {
  return route.params.pipe(
    switchMap(params => store.getRegionByCode(params['region']))
  )
}


export const REGION_DETAIL_BY_API_PROVIDER:Provider = {
  provide:REGION_DETAIL,
  deps:[FaqService, ActivatedRoute],
  useFactory: regionDetailByApiFactory
}

export const REGION_DETAIL_BY_STORE_PROVIDER:Provider = {
  provide:REGION_DETAIL,
  deps:[FaqStoreService, ActivatedRoute],
  useFactory: regionDetailByStoreFactory
}
