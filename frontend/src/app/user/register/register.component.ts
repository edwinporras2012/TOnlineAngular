import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/Iuser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { ValidationformDirective, passwordValidation } from 'src/app/validation/validationform.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  userValido: User | any;
  public searchUser = 'PRUEBA';
  validador: boolean= true;
  validadorItem: boolean;

  get passwords() {
    return this.formRegister.get('passwords');
  }

  constructor(private authService: AuthService, private userService: UserService) {
    this.formRegister = new FormGroup({
      email: new FormControl(),
      passwords: new FormControl(passwordValidation),
    })
    this.validadorItem = true;
  }

  ngOnInit(): void {

  }

  onSubmit2(form:any){
    let addUser = {
      email: form.value.email,
      pass: form.value.passwords,
      nombre: form.value.nombre,
    }
      
      this.userService.obtenerUsernames().subscribe(data=>{
        this.userValido = data;
        console.log('CAMPO EMAIL ', this.userValido)
        console.log('CAMPO EMAIL 2', addUser.email)

        for (let index = 0; index < this.userValido.length; index++) {
          const element = this.userValido[index];
          if (element.email ==addUser.email.toLocaleLowerCase()) {
            // console.log('EL USUARIO ', addUser.email, ' YA EXISTE')
            this.validador = true;
            break;
          }else{
            // console.log('EL USUARIO ', addUser.email, ' ESTA DISPONIBLE')
            this.validador = false
          }
        }
        console.log('VALIDADOR = ', this.validador);
        
        if (!this.validador) {
          console.log('EL USUARIO ', addUser.email, ' ESTA DISPONIBLE');
          if (addUser.email=='' && addUser.nombre=='' && addUser.pass=='') {
            console.log('ALGUNO DE LOS CAMPOS ESTA VACIO')
          }else if (addUser.pass=='') {
            console.log('EL CAMPO PASSWORD ESTA VACIO');
            this.validadorItem = false;
          }else if(addUser.nombre==''){
            console.log('EL CAMPO NOMBRE ESTA VACIO')
          }else if(addUser.nombre.length<=3){
            console.log('EL CAMPO NOMBRE DEBE TENER LA MENOS 4 CARACTERES')
          }else if(addUser.pass.length<=5){
            console.log('EL CAMPO PASSWORD DEBE TENER LA MENOS 6 CARACTERES')
          }else if(addUser.pass!='' && addUser.pass.length>=6){
            console.log('TODO OK....')
            this.userService.createUser(addUser).subscribe(data =>{
              console.log(data)
            this.authService.registerAuth(form.value.email, form.value.passwords)
              .then(response => {
                console.log('REGISTRO EXITOSO ', response);
              })
              .catch(error => console.log(error))
            })
          }
        } else{
          console.log('EL USUARIO ', addUser.email, ' YA EXISTE');
        }
      })



   
  }
}
