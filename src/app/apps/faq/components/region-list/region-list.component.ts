import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiBadgeModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLinkModule} from "@taiga-ui/core";
import {REGION_LIST} from "../../providers/region-list.provider";
import {Observable} from "rxjs";
import {Region} from "../../models/region";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-region-list',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiLinkModule, TuiButtonModule, RouterLink, TuiBadgeModule, RouterLinkActive],
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionListComponent {
  constructor(@Inject(REGION_LIST) public regions$:Observable<Region[]>) {
  }
}
