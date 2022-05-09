import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9-@]*')]],
  })


  constructor(private fb:FormBuilder,private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }


login(){
  var userid=this.loginForm.value.userid
  var pswd=this.loginForm.value.pswd
  // let database=this.ds.database


  if(this.loginForm.valid){
    //asynchronous call - login
    this.ds.login(userid,pswd)
    .subscribe((result:any)=>{
      if(result)
      {
        localStorage.setItem('currentId',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUname))
     
        alert(result.message)
        this.router.navigateByUrl("dashboard")

      }
    },
    (result)=>{
      alert(result.error.message)
    })


  }
     else{
    alert("invalid form")
  }
}
}
