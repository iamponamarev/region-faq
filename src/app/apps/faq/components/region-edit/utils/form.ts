import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Faq} from "../../../models/faq";

/**
 * TODO: ПЕРЕИМЕНОВАТЬ!!!!!
 * @param faq
 */
export const getFaqFormGroup = (faq:Partial<Faq> = {}):FormGroup => {
  return new FormGroup({
    TITLE: new FormControl(faq.TITLE??"", Validators.required),
    TEXT: new FormControl(faq.TEXT??"", Validators.required)
  })
}
