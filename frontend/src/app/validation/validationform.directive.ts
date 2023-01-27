import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function passwordValidation():ValidatorFn{
  return (control: AbstractControl)=>{
    const passwordValidationDirective = new ValidationformDirective();
    return passwordValidationDirective.validate(control);
  }
}

@Directive({
  selector: '[passwordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidationformDirective, multi: true}]
})
export class ValidationformDirective implements Validator {

  passwordProhibidos = ['123456', 'querty', '123456789'];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
      const password = <string>control.value;

      if (!password) { return {'passwordValidation': {'message': 'No se aceptan campos vacios'}}}
      // if (!password) {return{};}
      if (password.length < 4) {return {'passwordValidation': {'message': 'Debe ser superior a 4 caracteres'}};}

      if (this.passwordProhibidos.indexOf(password) !== -1){
        return {'passwordValidation': {'message': 'Escoge un mejor password'}}
      }

      if (password === password.toLowerCase()){
        return {'passwordValidation': {'message': 'Tu password debe de contener mayúsculas'}}
      }
  
      if (password === password.toUpperCase()){
        return {'passwordValidation': {'message': 'Tu password debe de contener minúsculas'}}
      }
  
      if (!/\d/.test(password)){
        return {'passwordValidation': {'message': 'Tu password debe de incluir un caracter numérico'}}
      }
    return null;
  }

}
