import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userAddForm: FormGroup;
  model:NgbDateStruct;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm() {
    this.userAddForm = this.formbuilder.group({
      isim: ['', Validators.required],
      soyisim: ['', Validators.required],
      tc: ['', Validators.required],
      email: ['', Validators.required],
      dogum_yili: ['', Validators.required],
      telefon: ['', Validators.required],
      sifre: ['', Validators.required],
    });
  }

  add()
  {
    if(this.userAddForm.valid)
    {
      let userModel=Object.assign({},this.userAddForm.value);
      this.userService.add(userModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message, "Başarılı");
      },responseError=>{
        if(responseError.error.Errors.lenght>0)
        {
          for(let i=0; i<responseError.error.Errors.lenght; i++)
          {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama Hatası");
          }
        }
      }
      )
    } else{
      this.toastrService.error("Formunuz Eksik", "Dikkat");
    }
  }
  getUser() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }
}
