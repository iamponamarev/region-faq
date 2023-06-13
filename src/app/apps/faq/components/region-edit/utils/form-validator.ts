import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";


/**
 * TODO: валидация формы на количество faq в регионе
 * @param form
 */
export const regionFormValidator = (form: AbstractControl): ValidationErrors => {
  return {
    "faq":"count"
  }
}
