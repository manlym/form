import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
 userForm: FormGroup;
  constructor(fb: FormBuilder){
    this.userForm=fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      dob:[null,Validators.required],
      phone:[null,Validators.required,Validators.pattern('^[0-9]\d{9}$')],

    });
  
    
   }
   get name(){
    return this.userForm.get('name') as FormControl 
   }
   get email(){
    return this.userForm.get('email') as FormControl 
   }
   get dob(){
    return this.userForm.get('dob') as FormControl 
   }
   get phone(){
     return this.userForm.get('phone')as FormControl
   }
send(){
  console.log(this.userForm.value)
}
  
  ngOnInit() {
   
  }

}
