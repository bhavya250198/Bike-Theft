import React from "react";
import {TextField,Button} from "@material-ui/core";

import "../Form/Form.css";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'Enter text',
            startDate: new Date("2020/08/12"),
            endDate: new Date("2020/08/14")
        }
        this.onClick =this.onClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
    }
    onClick=()=>{
        console.log("value",this.state.value);
        console.log("start date",this.state.startDate);
        console.log("end date",this.state.endDate);
    }
    handleChange = (event) => {
        this.setState({
          value: event.target.value,
        });
      };
      onChangeStartDate =(event)=>{
          this.setState({
              startDate:event.target.value
          });      
      }
      onChangeEndDate =(event)=>{
        this.setState({
              endDate:event.target.value
        });
    }
    render(){
        return(
            <form className="form-filter">
            <div>
            <TextField
            className="text-field"
          id="outlined-required"
          label="Case-Description"
          value={this.state.value}
         
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
            className="text-field"
          id="outlined-required"
          label="title"
          value={this.state.value}
         
          onChange={this.handleChange}
          variant="outlined"
        />
      <TextField
          className="text-field"
    id="date"
    label="from-date"
    format="yyyy/mm/dd"
    type="date"
   
    selected={this.state.startDate}
    onChange={this.onChangeStartDate}
    variant="outlined"
    selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
    
  />
   <TextField
          className="text-field"
    id="date"
    label="to-date"
    format="yyyy/mm/dd"
    type="date"
    
    selected={this.state.endDate}
    onChange={this.onChangeEndDate}
    variant="outlined"
    selectsEnd
        endDate={this.state.endDate}
        minDate={this.state.startDate}
    
  />
        <Button variant="outlined" color="primary" onClick={this.onClick}>Filter</Button>

            </div>
            </form>
        );
    }
}
export default Form;