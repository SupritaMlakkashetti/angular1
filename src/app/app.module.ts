import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './Employee/show-employee/show-employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepartmentComponent } from './Department/show-department/show-department.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { DeleteDepartmentComponent } from './Department/delete-department/delete-department.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    DepartmentComponent,
    ShowDepartmentComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    DeleteDepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
