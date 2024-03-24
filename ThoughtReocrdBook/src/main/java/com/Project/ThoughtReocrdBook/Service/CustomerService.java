package com.Project.ThoughtReocrdBook.Service;

import com.Project.ThoughtReocrdBook.DTO.CustomerDTO;
import com.Project.ThoughtReocrdBook.DTO.CustomerSaveDTO;
import com.Project.ThoughtReocrdBook.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}
