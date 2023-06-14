import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';
import { CarImagesService } from 'src/app/services/carImages/car-images.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  model: NgbDateStruct;
  imageAddForm:FormGroup;

  constructor(
    private carImagesService:CarImagesService,
    private formBulider:FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm()
  {
    this.carAddForm=this.formBulider.group({
      BrandId:['',Validators.required],
      ColorId:['',Validators.required],
      ModelYear:['',Validators.required],
      DailyPrice:['',Validators.required],
      Description:['',Validators.required],
      Images:['',Validators.required]
    });
  }

  createImagesForm()
  {
    this.imageAddForm=this.formBulider.group({
      BrandId:['',Validators.required],
      ColorId:['',Validators.required],
      ModelYear:['',Validators.required],
      DailyPrice:['',Validators.required],
      Description:['',Validators.required],
      Images:['',Validators.required]
    })
  }

  add() {
    if(this.carAddForm.valid)
    {
      this.imagesAdd();
      let carModel=Object.assign({},this.carAddForm.value);
      this.carService.add(carModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message, "Başarılı");
      },responseError=>{
        if(responseError.error.Error.lenght>0)
        {
          for(let i=0; i<responseError.error.Errors.lenght; i++)
          {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası");
          }
        }
      }
      )
    }else{
      this.toastrService.error("Formunuz Eksik", "Dikkat");
    }
  }

  imagesAdd() {
    let imageModel = Object.assign({}, this.carAddForm.value);
    this.carImagesService.add(imageModel).subscribe(response=>{
      console.log(response);
      this.toastrService.success(response.message, "Başarılı");
    },responseError=>{
      if(responseError.error.Error.lenght>0)
      {
        for(let i=0; i<responseError.error.Errors.lenght; i++)
        {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası");
        }
      }
    }
    )
  }
  
}
