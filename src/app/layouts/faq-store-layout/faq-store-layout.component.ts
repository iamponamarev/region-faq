import {ChangeDetectionStrategy, Component, Inject, OnDestroy, Self} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqStoreService} from "../../apps/faq/services/faq-store.service";
import {REGION_BY_STORE_PROVIDER} from "../../apps/faq/providers/region-list.provider";
import {RegionEditPageComponent} from "../../apps/faq/pages/region-edit-page/region-edit-page.component";
import {REGION_DETAIL_BY_STORE_PROVIDER} from "../../apps/faq/providers/region-detail.provide";
import {TuiDestroyService} from "@taiga-ui/cdk";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-faq-store-layout',
  standalone: true,
  imports: [CommonModule, RegionEditPageComponent],
  providers:[REGION_BY_STORE_PROVIDER, REGION_DETAIL_BY_STORE_PROVIDER],
  templateUrl: './faq-store-layout.component.html',
  styleUrls: ['./faq-store-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqStoreLayoutComponent{

  constructor(    private store:FaqStoreService) {

    store.fetchData()
      .subscribe()

  }
}
