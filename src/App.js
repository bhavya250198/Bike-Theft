import React from 'react';
import './App.css';
import Form from './Components/Form/Form';
import TableDetails from './Components/Table/Table';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
          data:[],
          presentdata:[]
    }
  }
  fetchdetails =()=>{
    axios.get('https://bikewise.org/api/v2/incidents?page=4&incident_type=theft&proximity_square=100')
    .then(response => {
                console.log(response);
                 
                 this.setState({ data: response.data.incidents,
                presentdata:response.data.incidents });
                 console.log(this.state.data);
            })
           .catch(function (error){
                console.log(error);
             })
  }
  onfiltertext = (titletext)=>{
    let filteredtitledata = this.state.presentdata;
    filteredtitledata=filteredtitledata.filter((i)=>{
      return i.title === titletext;
    })
    this.setState({
      data:filteredtitledata
    },()=>{
      console.log("title-data",this.state.data)
    })
  }
  onfilterdescription = (descriptiontext)=>{
    let filterdescriptiondata = this.state.presentdata
    filterdescriptiondata = filterdescriptiondata.filter((j)=>{
      return j.description === descriptiontext
    })
     this.setState({
      data:filterdescriptiondata
    },()=>{
      console.log("title-data",this.state.data)
    })

  }
  onfilteroccuredat =(occuredatnumber)=>{
    let filteroccuredatdata = this.state.presentdata
    filteroccuredatdata = filteroccuredatdata.filter((k)=>{
      return k.ocurred_at === occuredatnumber
    })
    this.setState({
      data:filteroccuredatdata
    })

  }
  onfilterupdateat =(updatenumber) =>{
    let filterupdatedata = this.state.presentdata
    filterupdatedata = filterupdatedata.filter((l)=>{
      return l.update_at === updatenumber
    })
    this.setState({
      data:filterupdatedata
    })
  }
  onReset=()=>{
    this.setState({
      data:this.state.presentdata
    })
  }
  componentDidMount(){
    this.fetchdetails();
  }
  render()
  {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
         <span className="police-dept">Police Department Berlin</span>
         <React.Fragment>
         <Form onfiltertext={this.onfiltertext} onfilterupdateat={this.onfilterupdateat} onfilterdescription={this.onfilterdescription} onfilteroccuredat={this.onfilteroccuredat}
         onReset={this.onReset}/>
         <TableDetails data = {this.state.data} />
         </React.Fragment>
      </header>
     
    </div>
  );
}
}

export default App;
