import React from "react";

class Student extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            x: 1,
            y: 50,
            name:"NO Name"
        }

        this.names = ["Prithish","Patel","Caciki","Prothom","Alo"]

    }

    onBtnAddClick = () => {
        //console.log("Button Clicked")
        //alert("Button Clicked")
        // this.x = this.x + 1
        // console.log("X: " + this.x)
        this.setState({x: this.state.x + 1})
        console.log("X: " + this.x)
        console.log("Y: " + this.y)
    }
    onBtnEventClick(event) {
        alert("Event Button Clicked")
        this.y = this.y + 1
        console.log("Event Clicked")
        
    }
    onNameChanged = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({name: event.target.value})
        
    }

  render() {
    return (
      <>
        <h2>Student Component</h2>
        {/* X: {this.x} */}
        X: {this.state.x}<br/>
        Y: {this.y}<br/>
        <button name="btnAdd" onClick={this.onBtnAddClick}>Add</button>"
        <button name="btnEvent" onClick={(event)=> this.onBtnEventClick(event)}>Event Button</button>

        {/* <input type="text" name="txtName" onChange={(event)=> this.onNameChanged(event)} /> */}
        <input type = "text" name="txtName" onChange={(event)=> this.onNameChanged(event)} />
        <p>{this.state.name}</p>
        {/* <ol>
            {this.names.map((ozi) => 
                <li>{ozi}</li>)
            }
        </ol> */}
        <ol>
            {this.names.map(name => (
                <li key={name}>{name}</li>
            ))}
        </ol>

        <select>
            {
                this.names.map(name => (
                    <option key={name}>{name}</option>
                ))
            }
        </select>
      </>
    );
  }
}

export default Student;