package com.Project.ThoughtReocrdBook.CustomerController;

import com.Project.ThoughtReocrdBook.DTO.CustomerDTO;
import com.Project.ThoughtReocrdBook.DTO.CustomerSaveDTO;
import com.Project.ThoughtReocrdBook.DTO.CustomerUpdateDTO;
import com.Project.ThoughtReocrdBook.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customer") // Base path for all endpoints in this controller
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/save")
    public ResponseEntity<String> saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO) {
        String id = customerService.addCustomer(customerSaveDTO);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public List<CustomerDTO> getAllCustomer()
    {
        List<CustomerDTO>allCustomers = customerService.getAllCustomer();
        return allCustomers;
    }

    @PostMapping("/update")
    public String updateCustomer(@RequestBody CustomerUpdateDTO customerUpdateDTO)
    {
        String id = customerService.updateCustomers(customerUpdateDTO);
        return id;
    }
    @DeleteMapping(path = "/deletecustomer/{id}")
    public String deleteCustomer(@PathVariable(value = "id") int id)
    {
        boolean deletecustomer = customerService.deleteCustomer(id);
        return "deleted";
    }




}
