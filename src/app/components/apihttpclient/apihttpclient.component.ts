import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-apihttpclient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apihttpclient.component.html',
  styleUrl: './apihttpclient.component.css'
})
export class ApihttpclientComponent implements OnInit {

  userList: any [] = [];

  constructor(private http: HttpClient, private deptSrv: DepartmentService) {

  }

  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      debugger;
      this.userList = result;
    })
  }

  ngOnInit(): void {
    this.getDepartment();
  }

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": "",
  }

  onSave() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
      if(res.result){
        alert("Department Created Success");
      } else {
        alert(res.message)
      }
    })
  }


  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      if(res.result){
        alert("Department Updated Success");
      } else {
        alert(res.message)
      }
    })
  }
  onDelete(id: any) {
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res: any) => {
      if(res.result){
        alert("Department Deleted Success");
      } else {
        alert(res.message)
      }
    })
  }

  deptList: any;

  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
  //     this.deptList = res.data;
  //   })
  // }

  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
    })
  }

  onEdit(data: any) {
    this.deptObj = data;
  }
}
