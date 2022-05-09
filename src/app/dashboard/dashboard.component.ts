import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userid = ""
  uname = ""
  eventForm = this.fb.group({
    date: ['', [Validators.required]],
    description: ['', [Validators.required]]
  })

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

    if (localStorage.getItem('currentId')) {
      this.userid = JSON.parse(localStorage.getItem('currentId') || '')
      this.uname = JSON.parse(localStorage.getItem('currentUser') || '')
    }


  }

  ngOnInit(): void {
  }

  addEvent(){
    var date=this.eventForm.value.date
    var description=this.eventForm.value.description
    if(this.eventForm.valid){
      this.ds.addEvent(this.userid,date,description)
      .subscribe((result:any)=>
      {
        if(result){
          alert(result.message)
        }
        else{
          alert(result.error.message)
        }
      })
    }
    else{
      alert("invalid form")
    }
  }

}
