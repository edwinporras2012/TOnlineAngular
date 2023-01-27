import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public formParent: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initFormParent();
  }

  initFormParent():void{
    this.formParent = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      skills: new FormArray([], [Validators.required])
    })
  }

  initFormSkill():FormGroup{
    return new FormGroup({
      lenguaje: new FormControl(''),
      projectUrl: new FormControl(''),
      expYear: new FormControl('', [Validators.required]),
    })
  }

  addSkill():void{
    const refSkills = this.formParent.get('skills') as FormArray;
    refSkills.push(this.initFormSkill())
  }

  getControl(key: string, form: FormGroup):any{
    return form.get(key);
  }

  removeValidation(index: number, key: string):void{
    const refParent = this.formParent.get('skills') as FormArray;
    const refSingle = refParent.at(index).get(key) as FormArray;
    refSingle.clearValidators();
    refSingle.updateValueAndValidity();
  }

  addValidation(index: number, key: string):void{
    const refParent = this.formParent.get('skills') as FormArray;
    const refSingle = refParent.at(index).get(key) as FormArray;
    refSingle.setValidators([Validators.required]);
    refSingle.updateValueAndValidity();
  }

}
