import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private authService: AuthService, private userService: UserService) {
    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   console.log(this.formRegister.value);
  //   this.authService.registerAuth(this.formRegister.value)
  //     .then(response => {
  //       console.log('RESPUESTA ', response);
  //     })
  //     .catch(error => console.log(error))
  // }

  onSubmit2(form:any){
    let addUser = {
      email: form.value.email,
      pass: form.value.nombre,
      nombre: form.value.password,
    }
    // console.log('datos user: ', addUser);
      this.userService.createUser(addUser).subscribe(data =>{
        console.log(data)
        // console.log('DATOSFORM', form.value);
      this.authService.registerAuth(form.value.email, form.value.password)
        .then(response => {
          console.log('REGISTRO EXITOSO ', response);
        })
        .catch(error => console.log(error))
    })
  }
}
