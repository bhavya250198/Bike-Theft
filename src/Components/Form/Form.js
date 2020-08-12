import React from "react";
import {TextField,Button} from "@material-ui/core";

import "../Form/Form.css";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'Enter text',
            description:'Enter text',
            startDate: '2020/08/10',
            endDate: '2020/12/10'
        }
        
        this.handleChange= this.handleChange.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onhandleChangeDescription = this.onhandleChangeDescription.bind(this);
    }
    onClick=()=>{
        let titletext=this.state.value;
        
        this.props.onfiltertext(titletext);
      
       
    }
    handleChange = (event) => {
        this.setState({
          value: event.target.value,
        });
      };
      onhandleChangeDescription=(event)=>  {
          this.setState({
              description:event.target.value
          });
      }
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
          value={this.state.description}
          onChange={this.onhandleChangeDescription}
          
        />
        <TextField
            className="text-field"
          id="outlined-required"
          label="Title"

          value={this.state.value}
          onChange={this.handleChange}
        
        />
      <TextField
          className="text-field"
    id="date"
    label="from-date"
   
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
    // format="yyyy/mm/dd"
    type="date"
    
    selected={this.state.endDate}
    onChange={this.onChangeEndDate}
    variant="outlined"
    selectsEnd
        endDate={this.state.endDate}
        minDate={this.state.startDate}
    
  />
        <Button className="button-filter" variant="outlined" color="primary" onClick={()=>{this.onClick()}}>Filter</Button>

            </div>
            </form>
        );
    }
}
export default Form;