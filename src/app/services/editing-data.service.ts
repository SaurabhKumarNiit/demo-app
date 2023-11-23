import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditingDataService {
  constructor(private http: HttpClient) {}

  data: any;

  baseurl = 'https://actionable-bag-production.up.railway.app';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  getVedioRequestDatav(): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/videoRequestData`
    );
  }

  getVedioRequestData(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/videoRequestData`);
  }

  getThumbnailData(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/imgData`);
  }

  registerCustomer(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.baseurl}/userRegister`, data);
  }

  registerAdmin(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.baseurl}/addAdmin`, data);
  }

  loginCustomer(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/userLogin`, data);
  }

  loginAdmin(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/adminLogin`, data);
  }

  // addThumbnail(t:any) {
  //   console.log(data);
  //   return this.http.post<any>("http://localhost:1001/videoUpload",data);
  // }

  // uploadVideo(thumbnails: any, videos: any, name: any) {
  //   const formData = new FormData();
  //   formData.append('thumbnails', thumbnails);
  //   formData.append('videos', videos);
  //   formData.append('name', name);

  //   return this.http.post('http://localhost:1001/videoUpload', formData);
  // }

  uploadVideo(data: any) {
    return this.http.post(`${this.baseurl}/videoUpload`, data);
  }

  videoRequest(data: any) {
    console.log(data);
    return this.http.post(`${this.baseurl}/videoRequest`, data);
  }

  saveGoogleInfo(data: any) {
    console.log(data);
    return this.http.post(`${this.baseurl}/googleLogin`, data);
  }

  saveFacebookInfo(data: any) {
    console.log(data);
    return this.http.post(`${this.baseurl}/facebookLogin`, data);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getSingleUser(): Observable<any> {
    this.data = this.getEmail();
    return this.http.get<any>(`${this.baseurl}/user/${this.data}`);
  }

  saveFeedbacks(formData:any) {
    console.log(formData);
    return this.http.post(`${this.baseurl}/feedback`, formData);
  }

  
  RemoveUser(email:string) {
    this.data = this.getEmail();
    return this.http.delete<any>(`${this.baseurl}/user/delete/${email}`);
  }
}
