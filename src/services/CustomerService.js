import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customers";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(employee){
        let value=axios.post(CUSTOMER_API_BASE_URL, employee);
        console.log(value)
        return value;
    }

    getCustomerById(employeeId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + employeeId);
    }

    updateCustomer(employee, employeeId){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteCustomer(employeeId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + employeeId);
    }
}

export default new CustomerService()