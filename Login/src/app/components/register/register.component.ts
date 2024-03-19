import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  User_name: string ="";
  email: string ="";
  password: string ="";

  constructor(private http: HttpClient )
  {
  }
  save()
  {
  
    let bodyData = {
      "User_name" : this.User_name,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/api/v1/employee/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
    });
  }

}
