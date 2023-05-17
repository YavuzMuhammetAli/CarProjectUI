import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  model: NgbDateStruct;

  constructor(
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
      marka:['',Validators.required],
      model:['',Validators.required],
      yakit:['',Validators.required],
      kilometre:['',Validators.required],
      //yılı:['',Validators.required],
      vites:['',Validators.required],
      motor:['',Validators.required]
    });
  }

  add() {
    if(this.carAddForm.valid)
    {
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
}
