import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseMode';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7075/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'car/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    let newPath=this.apiUrl + 'car/add';
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}
