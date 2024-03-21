package com.Login.Login.Register.Service;

import com.Login.Login.Register.DTO.EmployeeDTO;
import com.Login.Login.Register.DTO.LoginDTO;
import com.Login.Login.Register.response.LoginResponse;


public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
}
