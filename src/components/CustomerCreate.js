import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class CustomerCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: ' ',
            firstName: '',
            lastName: '',
            age:'',
            annualIncome:'',
            loginUsername:'',
            password:'',
            nicNumber:'',
            remarks:''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeAnnualIncomeHandler = this.changeAnnualIncomeHandler.bind(this);
        this.changeLoginUsernameHandler = this.changeLoginUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeNicNumberHandler = this.changeNicNumberHandler.bind(this);
        // this.remarks = this.remarks.bind(this);


        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then( (res) =>{
                let customer = res.data;
                this.setState({
                    title:customer.title,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    age:customer.age,
                    annualIncome:customer.annualIncome,
                    loginUsername:customer.loginUsername,
                    password:customer.password,
                    nicNumber:customer.nicNumber



                });
            });
        }        
    }
    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {title:this.state.title,firstName: this.state.firstName, lastName: this.state.lastName,age:this.state.age,annualIncome:this.state.annualIncome,loginUsername:this.state.loginUsername,password:this.state.password,nicNumber:this.state.nicNumber, emailId: this.state.emailId};
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                if(res!==null){
                    alert("Duplicate user entered");
                }else{
                this.props.history.push('add-customer/_add');
                }
            });
        }else{
            CustomerService.updateCustomer(customer, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeAnnualIncomeHandler= (event) => {
        this.setState({annualIncome: event.target.value});
    }
    changeLoginUsernameHandler= (event) => {
        this.setState({loginUsername: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeNicNumberHandler= (event) => {
        this.setState({nicNumber: event.target.value});
    }
    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.ageS} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Annual Income: </label>
                                            <input placeholder="Annual Income" name="annualIncome" className="form-control" 
                                                value={this.state.annualIncome} onChange={this.changeAnnualIncomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Login Username: </label>
                                            <input placeholder="Username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeLoginUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> NIC Number: </label>
                                            <input placeholder="NIC Number" name="nicNumber" className="form-control" 
                                                value={this.state.nicNumber} onChange={this.changeNicNumberHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CustomerCreate
