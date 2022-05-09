import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9-@]*')]],


  })

  constructor(private fb:FormBuilder,private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  register() {
    var uname = this.registerForm.value.uname

    var userid = this.registerForm.value.userid
    var pswd = this.registerForm.value.pswd

    if (this.registerForm.valid) {
     // asynchronous

      this.ds.register(uname,userid, pswd )
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }

      },
      (result)=>{
        alert(result.error.message)
      }
      )
      

    }
     else {
      alert("invalid form")
    }
  }

}


