import {Directive, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroupDirective} from "@angular/forms";
import {Region} from "../../models/region";
import {getFaqFormGroup} from "./utils/form";

@Directive({
  selector: '[appRegionForm]',
  standalone:true
})
export class RegionFormDirective {

  constructor(
    private formBuilder:FormBuilder,
    private form:FormGroupDirective) { }

  @Input('appRegionForm') set faq(region:Region | null){

    if(region){

      this.form.form.patchValue(region)
      const faqGroups = (this.form.form.get('faq') as FormArray)
      faqGroups.controls.length = 0

      region.faq.forEach( faq => faqGroups.push(
          getFaqFormGroup(faq)
        )
      )

    }
    else{

        this.form.form?.reset()

    }
  }
}
