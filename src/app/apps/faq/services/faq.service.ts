import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_ROOT} from "../../../core/config/api-root";
import {Region} from "../models/region";
import {RegionFilter} from "../models/region-filter";
import {FaqStoreService} from "./faq-store.service";

@Injectable({
  providedIn: 'root'
})
export class FaqService {



  private getPath(){
    return this.api + `/region/`
  }

  constructor(@Inject(API_ROOT) private api:string,
              private http:HttpClient) { }

  public get(filter:Partial<RegionFilter> = {}):Observable<Region[]>{
    return this.http.get<Region[]>(this.getPath(),{
      params:filter
    })
  }


  public getByCode(code:string):Observable<Region>{
    return this.http.get<Region>(this.getPath(),{
      params:{
        code
      }
    })
  }

  public save(region:Region):Observable<Region>{
    return this.http.post<Region>(this.getPath(), JSON.stringify(region))
  }

  public remove(code:string):Observable<Region>{
    return this.http.delete<Region>(this.getPath(), {
      params:{
        code
      }
    })
  }


}
