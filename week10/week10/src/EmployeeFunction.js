import {useState} from 'react';

function EmployeeFunction(props) {

    const [emp, setEmp] = useState({

            txtFirstName: "",
            txtLastName: "",
            txtSalary: "",
    })

    let onSubmitData = (event) => {
        event.preventDefault()
        console.log(emp)
    }

    let onValueChange = (event) => {
        setEmp({

            ...emp, [event.target.name]: event.target.value
        })
    
    }

        return(
            <div>
                <h1>Employee Data Entry From Function Component</h1>
                <form>
                    <input onChange={e => this.onValueChange(e)} type="text" name="txtFirstName" placeholder="First Name" /><br/>
                    <input onChange={e => this.onValueChange(e)} type="text" name="txtLastName" placeholder="Last Name" /><br/>
                    <input onChange={e => this.onValueChange(e)} type="text" name="txtSalary" placeholder="Salary" /><br/>
                    {/* <input type="text" name="txtSalary" placeholder="Enter Salary ">Salary</input> */}
                    <input type="submit" value="Submit" onClick={e => this.onSubmitData(e)}/>
                </form>
            </div>
        );
    }

export default EmployeeFunction;

//exios