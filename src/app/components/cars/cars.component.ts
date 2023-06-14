import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImages } from 'src/app/models/carImages';
import { CarService } from 'src/app/services/car/car.service';
import { CarImagesService } from 'src/app/services/carImages/car-images.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImages[] = [];
  dataLoaded = false;
  imageUrl='https://localhost:7075/Uploads/Images';
  carDetail:CarDetail[]=[];

  constructor(
    private carService: CarService,
    private carImagesService: CarImagesService,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.getCarDetail();
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetail(){
    this.carService.getCarDetail().subscribe((response)=>{
      this.carDetail=response.data;
    })
  }

  getAll(){
    this.carImagesService.getAll().subscribe((response)=>{
      this.carImages=response.data;
    })
  }

  addToCart(car:CarDetail){
    this.toastrService.success("sepete eklendi",car.brandName);
    this.cartService.addToCart(car);
  }
}
