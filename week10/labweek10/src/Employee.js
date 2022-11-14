
import React, {useState} from 'react';
import './App.css';

export default function Employee() {

    const [employee, setEmployee] = useState({
        
        email: '',
        fullName: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: ''
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
    }

    return (
        <div className='App'>
            <h1>Data Entry Form</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={employee.email} onChange={handleChange} />
                
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" value={employee.fullName} onChange={handleChange} />
                
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" value={employee.address} onChange={handleChange} />
                
                <label htmlFor="address2">Address 2</label>
                <input type="text" name="address2" id="address2" value={employee.address2} onChange={handleChange} />
                
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={employee.city} onChange={handleChange} />
                
                <label htmlFor="province">Province</label>
                <select type="text" name="province" id="province" value={employee.province} onChange={handleChange}>
                    <option value="choose">Choos...</option>
                    <option value="AB">Alberta</option>
                    <option value="BC">British Columbia</option>
                    <option value="MB">Manitoba</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NL">Newfoundland and Labrador</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="ON">Ontario</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="QC">Quebec</option>
                    <option value="SK">Saskatchewan</option>    
                </select>

                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" name="postalCode" id="postalCode" value={employee.postalCode} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <div className='AppOutput'>
                <h5>
                    Email: {employee.email} <br />
                </h5>
                <h5>
                    Full Name: {employee.fullName} <br />
                </h5>
                <h5>
                    Address: {employee.address} <br />
                </h5>
                <h5>
                    Address 2: {employee.address2} <br />
                </h5>
                <h5>
                    City: {employee.city} <br />
                </h5>
                <h5>
                    Province: {employee.province} <br />
                </h5>
                <h5>
                    Postal Code: {employee.postalCode} <br />
                </h5>
            </div>
        </div>
        

    );
}

