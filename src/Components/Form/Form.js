import React from "react";
import {TextField,Button} from "@material-ui/core";


import "../Form/Form.css";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'Enter text',
            description:'Enter text',
            occured_at:'1000241',
            updated_at:'10000440'
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
    onfilteroccuredat=()=>{
        let occuredatnumber = this.state.occured_at;
        this.props.onfilteroccuredat(occuredatnumber);
    }
    onfilterdescription = ()=>{
        let descriptiontext = this.state.description;
        this.props.onfilterdescription(descriptiontext);
    }
    onfilterupdateat = ()=>{
        let updatenumber = this.state.updated_at;
        this.props.onfilterupdateat(updatenumber);
    }
    onReset =()=>{
        this.props.onReset();
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
              occured_at:event.target.value
          });      
      }
      onChangeEndDate =(event)=>{
        this.setState({
              updated_at:event.target.value
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
    // id="date"
    
    label="occured-at"
        

    value={this.state.occured_at}
    onChange={this.onChangeStartDate}
  />
   <TextField
          className="text-field"
    // id="date"
    label="updated-at"
    // format="yyyy/mm/dd"
    // type="date"
    
    value={this.state.updated_at}
    onChange={this.onChangeEndDate}
    
    
  />
        <Button  variant="outlined" onClick={()=>{this.onClick();
                                        this.onfilterupdateat();     this.onfilteroccuredat();this.onfilterdescription();}}>Filter</Button>
        <Button  variant="outlined" onClick={this.onReset} >Reset</Button>

            </div>
            </form>
        );
    }
}
export default Form;