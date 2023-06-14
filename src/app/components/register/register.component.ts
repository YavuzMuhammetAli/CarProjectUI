import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  model: NgbDateStruct;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm()
  {
    this.registerForm=this.formBuilder.group({
      Email:['',Validators.required],
      Password:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      TC:['',Validators.required],
      BirthDay:['',Validators.required]
    })
  }
  add(){
if(this.registerForm.valid)
    {
      let registerModel=Object.assign({},this.registerForm.value);
      console.log(registerModel);
      this.authService.register(registerModel).subscribe(response=>{
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
