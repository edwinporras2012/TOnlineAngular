import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';

@Directive({
  selector: '[appUsernameUnique]',
  providers: [{  provide: NG_ASYNC_VALIDATORS, useExisting: UsernameUniqueDirective, multi: true }]
})
export class UsernameUniqueDirective implements AsyncValidator {

  constructor(private userService: UserService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const username = control.value;
    return this.userService.obtenerUsernames().pipe(
      map(usernameArr => {
        if (usernameArr.indexOf(username) !== -1){
          return {usernameUnico: true} ;
        }
        return null;
      })
    );
  }

}

@Injectable({providedIn: 'root'})
export class UsernameUnicoService implements AsyncValidator  {
 constructor(private userService: UserService) { }

 validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
 {
   const usernameUnicoDirective = new UsernameUniqueDirective(this.userService);
    return usernameUnicoDirective.validate(control);
 }
}
