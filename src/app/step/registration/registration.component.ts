import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { StepRegService } from 'src/app/Services/step-reg.service';
import { UserRegService } from 'src/app/Services/user-service';
import {  StepReg } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    UploadURL = 'http://localhost:8051/step-api/upload';
    public uploader: FileUploader = new FileUploader({url:this.UploadURL, itemAlias: 'file'});

  router: any;
  stepReg:StepReg = new StepReg();
      
      
      constructor(private stepRegService: StepRegService) { }
    
      ngOnInit(): void {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('FileUpload:uploaded:', item, status, response);
        alert('File uploaded successfully');
     };
      }
    
      stepRegister(){
        console.log(this.stepReg);
        this.stepRegService.registerStep(this.stepReg).subscribe(data=>{
          alert("Registration successful!");
        },error=>alert(""));
      }

    


    
    }
    