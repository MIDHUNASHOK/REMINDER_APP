import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


register(uname: any,userid: any,pswd: any) {
  //json data
  const data={
   uname, userid,pswd
  }
  //register API
  return this.http.post('http://localhost:3000/register',data)
}



login(userid: any, pswd: any) {


  //req body
  const data={
    userid,pswd
  }
  //login API call
  return this.http.post('http://localhost:3000/login',data)
}



//ADD EVENT
addEvent(userid:any,date:any,description:any){
  const data={
    userid,date,description
  }
  return this.http.post('http://localhost:3000/addEvent',data)

 // return this.database[acno]["transaction"]
}


//view EVENT
viewEvent(userid:any){
  const data={
    userid
  }
  return this.http.post('http://localhost:3000/viewEvent',data)

 // return this.database[acno]["transaction"]
}}