package com.Project.ThoughtReocrdBook.Service;

import com.Project.ThoughtReocrdBook.CustomerRepo.CustomerRepo;
import com.Project.ThoughtReocrdBook.DTO.CustomerDTO;
import com.Project.ThoughtReocrdBook.DTO.CustomerSaveDTO;
import com.Project.ThoughtReocrdBook.DTO.CustomerUpdateDTO;
import com.Project.ThoughtReocrdBook.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceIMPL implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public String addCustomer(CustomerSaveDTO customerSaveDTO)
    {
        Customer customer = new Customer(
                customerSaveDTO.getSituation(),
                customerSaveDTO.getThoughts(),
                customerSaveDTO.getFeelings(),
                customerSaveDTO.getActions()
        );

        customerRepo.save(customer);
        return customer.getSituation();
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> getCustomers = customerRepo.findAll();
        List<CustomerDTO> customerDTOList = new ArrayList<>();
        for (Customer a:getCustomers)
        {
            CustomerDTO customerDTO = new CustomerDTO(
                    a.getCustomerId(),
                    a.getSituation(),
                    a.getThoughts(),
                    a.getFeelings(),
                    a.getActions()
            );
            customerDTOList.add(customerDTO);
        }
        return customerDTOList;
    }

    @Override
    public String updateCustomers(CustomerUpdateDTO customerUpdateDTO)
    {
        if (customerRepo.existsById(customerUpdateDTO.getCustomerId()))
        {
            Customer customer = customerRepo.getById(customerUpdateDTO.getCustomerId());

            customer.setSituation(customerUpdateDTO.getSituation());
            customer.setThoughts(customerUpdateDTO.getThoughts());
            customer.setFeelings(customerUpdateDTO.getFeelings());
            customer.setActions(customerUpdateDTO.getActions());
            customerRepo.save(customer);

        }
        else
        {
            System.out.println("Customer ID do not Exist");
        }
        return null;
    }

    @Override
    public boolean deleteCustomer(int id) {

        if(customerRepo.existsById(id))
        {
            customerRepo.deleteById(id);
        }
        else
        {
            System.out.println("customer id not found");
        }


        return false;
    }
}



