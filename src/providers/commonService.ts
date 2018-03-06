import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
//import {SERVER_URL} from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//let apiUrl = 'http://localhost/bro/Webservice/';
let apiUrl = 'http://162.144.41.156/~izaapinn/ram/bro/index.php/Webservice/';

@Injectable()
export class CommonService {
  constructor(public http : Http) {
  }
  login(data){
    let headers = new Headers();
    let options = new RequestOptions({headers:headers});
    return this.http.put(apiUrl+'users/login',data,options).map(res => res.json())
    .toPromise();
  }
  profile(data){
    //console.log(data);
    return this.http.get(apiUrl+"users/profile?id="+data.id+"&role="+data.role_id).map(res => res.json())
    .toPromise();
  }
  chapter(data){
   
    return this.http.get(apiUrl+"users/chapter?id="+data.id).map(res => res.json())
    .toPromise();
  }
  council(data){
   
    return this.http.get(apiUrl+"users/council?id="+data.id).map(res => res.json())
    .toPromise();
  }
  commandery(data){
    return this.http.get(apiUrl+"users/commandery?id="+data.id).map(res => res.json())
    .toPromise();
  }
profileData(form) {

    var data = form;
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/profile_update',data ,options).map(res => res.json())
       .toPromise();
  }
  chapterData(form) {

     var data = form;
    //var data = form;
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/chapter_update',data ,options).map(res => res.json())
       .toPromise();
  }
   councilData(form) {
     var data = form;
    //var data = form;
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/council_update',data ,options).map(res => res.json())
       .toPromise();
  }
   commData(form) {
     var data = form;
    //var data = form;
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.put(apiUrl+'users/comm_update',data ,options).map(res => res.json())
       .toPromise();
  }
}