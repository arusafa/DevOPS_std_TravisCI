import React from "react";

class Employee extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            txtFirstName: "",
            txtLastName: "",
            txtSalary: "",
        
        }
    }

    onSubmitData = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    onValueChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
            
        })

    }

    render() {
        return(
            <div>
                <h1>Employee Data Entry</h1>
                <form>
                    <input onChange={e => this.onValueChange(e)} type="text" name="txtFirstName" placeholder="First Name" /><br/>
                    <input onChange={e => this.onValueChange(e)} type="text" name="txtLastName" placeholder="Last Name" /><br/>
                    <input onChange={e => this.onValueChange(e)} type="text" name="txtSalary" placeholder="Salary" /><br/>
                    {/* <input type="text" name="txtSalary" placeholder="Enter Salary ">Salary</input> */}
                    <input type="submit" value="Submit" onClick={e => this.onSubmitData(e)}/>
                </form>
            </div>
        )
    }
}

export default Employee