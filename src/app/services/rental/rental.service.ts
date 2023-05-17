import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseMode';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:7075/api/';

  constructor(private httpClient:HttpClient) { }


}
