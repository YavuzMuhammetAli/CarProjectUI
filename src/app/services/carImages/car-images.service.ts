import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from 'src/app/models/carImages';
import { ListResponseModel } from 'src/app/models/listResponseMode';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  apiUrl = 'https://localhost:7075/api/';

  constructor(private httpClient: HttpClient) {}

  getByCarId(id: number): Observable<ListResponseModel<CarImages>> {
    let newPath = this.apiUrl + 'carimages/getimagebycarid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }

  add(carImages:CarImages):Observable<ResponseModel>{
    let newPath=this.apiUrl+'carimages/add';
    return this.httpClient.post<ResponseModel>(newPath,carImages);
  }

  getAll():Observable<ListResponseModel<CarImages>>{
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }
}
