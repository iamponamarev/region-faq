import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {REGION_DETAIL} from "../../providers/region-detail.provide";
import {filter, Observable, switchMap} from "rxjs";
import {Region} from "../../models/region";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiAlertService, TuiButtonModule, TuiDialogService, TuiLinkModule, TuiNotification} from "@taiga-ui/core";
import {
  TUI_PROMPT,
  TuiBadgeModule,
  TuiInputModule,
  TuiIslandModule,
  TuiPromptData,
  TuiTextAreaModule
} from "@taiga-ui/kit";
import {Router, RouterLinkActive} from "@angular/router";
import {RegionFormDirective} from "./region-form.directive";
import {FaqStoreService} from "../../services/faq-store.service";
import {regionFormValidator} from "./utils/form-validator";
import {getFaqFormGroup} from "./utils/form";

@Component({
  selector: 'app-region-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TuiButtonModule, TuiInputModule, RouterLinkActive,
    TuiBadgeModule, TuiIslandModule, TuiTextAreaModule, TuiLinkModule, RegionFormDirective],
  templateUrl: './region-edit.component.html',
  styleUrls: ['./region-edit.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionEditComponent {


  form:FormGroup = new FormGroup({
    title: new FormControl(),
    code: new FormControl("", {nonNullable:true, validators:[Validators.required]}),
    faq: new FormArray([])
  })

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    @Inject(TuiAlertService) private readonly alert: TuiAlertService,
    private router:Router,
    private store:FaqStoreService,
    @Inject(REGION_DETAIL) public region$:Observable<Region>) {
  }


  get faqFormArray():FormGroup[] {
    return (this.form.get('faq') as FormArray).controls as FormGroup[];
  }


  addFaq(){

    (this.form.get('faq') as FormArray).controls.push(getFaqFormGroup())

  }


  onSubmit() {

    this.store.append(this.form.getRawValue()).subscribe(region => {

      this.router.navigate([region.code])

      this.alert
        .open('Не забывайте сбросить кеш CMS', {
          label:"Регион обновлен",
          status:TuiNotification.Success
        })
        .subscribe();

    })

  }


  onClickRemoveFaq(index: number) {
    (this.form.get('faq') as FormArray).removeAt(index)
  }


  onClickRemoveRegion(region: Region) {

    const data: TuiPromptData = {
      content:
        'Операция необратима',
      yes: 'Удалить',
      no: 'Отмена',
    };

    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: `Удалить FAQ для региона ${region.code} ?`,
        size: 's',
        data,
      })
      .pipe(
        filter(response => response),
        switchMap(response => this.store.remove(region.code)))
      .subscribe(dialog => {
        this.router.navigate(['new'])
      }, error => {
        this.alert
          .open('Регион уже удален', {
            label:"Ошибка удаления",
            status:TuiNotification.Warning
          })
          .subscribe();
      });
  }

}
