import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseMode';
import { ResponseModel } from 'src/app/models/responseModel';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:7075/api/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'user/getall';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  add(user:User):Observable<ResponseModel>{
    let newPath= this.apiUrl + 'user/add';
    return this.httpClient.post<ResponseModel>(newPath,user);
  }
}
