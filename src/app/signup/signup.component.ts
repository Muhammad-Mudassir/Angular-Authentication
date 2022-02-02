import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor( public formbuilder:FormBuilder,private http: HttpClient,private route: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name:[''],
      email:[''],
      age:[''],
      password:['']
    })
  }

  signUp()
  {
    this.http.post<any>("http://localhost:3000/signup",this.signupForm.value)
    .subscribe(res =>{
      this.signupForm.reset();
      this.route.navigate(['login']);
    },
    error =>
    {
      alert("Something went wrong");
    })
  }

  

}
