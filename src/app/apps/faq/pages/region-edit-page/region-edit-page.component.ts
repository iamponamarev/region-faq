import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegionListComponent} from "../../components/region-list/region-list.component";
import {RegionEditComponent} from "../../components/region-edit/region-edit.component";

@Component({
  selector: 'app-region-edit-page',
  standalone: true,
  imports: [CommonModule, RegionListComponent, RegionEditComponent],
  templateUrl: './region-edit-page.component.html',
  styleUrls: ['./region-edit-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionEditPageComponent {

}
