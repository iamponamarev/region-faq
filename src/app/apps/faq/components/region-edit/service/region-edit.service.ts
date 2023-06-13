import { Injectable } from '@angular/core';
import {FaqStoreService} from "../../../services/faq-store.service";




@Injectable({
  providedIn: 'root'
})
export class RegionEditService {

  constructor(
    private store:FaqStoreService,

    ) { }


  promptRemove(){

  }

  alertSuccess(){

  }


  close(){

  }

}
