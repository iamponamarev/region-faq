import {InjectionToken, Provider} from "@angular/core";
import {FaqService} from "../services/faq.service";
import {Observable} from "rxjs";
import {FaqStoreService} from "../services/faq-store.service";

import {Region} from "../models/region";

export const REGION_LIST = new InjectionToken("Get region list")



const regionByStoreFactory = (store:FaqStoreService):Observable<Region[]> => {
  return store.faqList
}




export const REGION_BY_STORE_PROVIDER:Provider = {
  provide:REGION_LIST,
  deps:[FaqStoreService],
  useFactory: regionByStoreFactory
}
