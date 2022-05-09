import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  userid:any
  event:any

  constructor(private ds:DataService){

    //view event
    this.userid=JSON.parse(localStorage.getItem('currentId')||'')
  //  asynchronous

    this.ds.viewEvent(this.userid)
    .subscribe((result:any)=>{
      if(result){
        this.event=result.eventForm
      }
    },
    result=>{
      alert(result.message)
    }
    )
    // console.log(this.transaction);
    
  }
  
   

  ngOnInit(): void {
  }

}
