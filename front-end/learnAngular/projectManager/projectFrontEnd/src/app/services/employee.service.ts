import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

const baseUrl = 'http://localhost:8080/api/v1/employees';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(baseUrl);
  }
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${baseUrl}`, employee);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${baseUrl}/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${baseUrl}/${id}`, employee);
  }
}
