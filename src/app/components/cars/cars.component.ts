import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

cars:Car[]=[];
dataLoaded=false;

constructor(
  private carService:CarService,
  private activetedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

}
