import { Injectable } from '@angular/core';
import {FaqService} from "./faq.service";
import {BehaviorSubject, map, Observable, switchMap, tap} from "rxjs";
import {Region} from "../models/region";


interface FaqState {
  faq:Record<string, Region>
}

@Injectable({
  providedIn: 'root'
})
export class FaqStoreService {

  constructor(private faqService:FaqService) { }

  private readonly state$:BehaviorSubject<FaqState> = new BehaviorSubject<FaqState>({faq:{}})


  /**
   * а-ля селекторы
   */
  public faqList:Observable<Region[]> = this.state$.pipe(map(state => Object.values(state.faq)))

  public getRegionByCode(code:string){
    return this.state$.pipe(
      map(state => state.faq[code])
    )
  }


  /**
   * а-ля actions / reducer
   */
  public append(region:Region){
    return this.faqService.save(region).pipe(
      tap(region => this.state$.next({
        ...this.state$.getValue(),
        faq:{
          ...this.state$.getValue().faq,
          [region.code]:region
        }
      }))
    )
  }

  public remove(code:string){
    return this.faqService.remove(code).pipe(
      tap(response=> {
        const faqState = this.state$.getValue().faq
        delete faqState[code]
        this.state$.next({
          faq:{
            ...faqState
          }
        })
      })
    )
  }



  /**
   * НА МОЙ ВЗГЛЯД САМЫЙ СПОРНЫЙ МОМЕТ КЛАССА
   */
  fetchData(){
    return this.faqService.get().pipe(
      tap( (faq:Region[]) => {

        const state:Record<string, Region> = {}
        faq.forEach(item => {
          state[item.code] = item
        })


        this.state$.next({
          ...this.state$.getValue(),
          faq:{
            ...state
          }
        })
      })
    )
  }



}
