import React from "react";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import "../Table/Table.css";
import axios from "axios";
 class TableDetails extends React.Component{
     constructor(props)
     {
         super(props);
         this.state={
             data:[],
             filterable:true,
             columns:[
                {
            
                    Header: "Bike_Id",
                    accessor: "id",
                    width:100
                  },
                  {
                    Header: "Title",
                    accessor: "title",
                    width:200
                    
                  },
                  {
                    Header: "Address",
                    accessor: "address",
                    width:200
                  },
                  {
                    Header: "Occured At",
                    accessor: "occurred_at",
                    width:200
                    
                  },
                  {
                    Header: "Updated At",
                    accessor: "updated_at",
                    width:200
                  },
                  {
                    Header: "Description",
                    accessor: "description",
                    width:300
                  }
              
             ]
         }
     }
     componentDidMount(){
         axios.get('https://bikewise.org/api/v2/incidents?page=4&incident_type=theft&proximity_square=100')
         .then(response => {
                     console.log(response);
                      
                      this.setState({ data: response.data.incidents });
                      console.log(this.state.data);
                 })
                .catch(function (error){
                     console.log(error);
                  })
     }
     render()
     {
         return(
             <div className="table-of-details">
                 <ReactTable
                 className="table-details"
                 data={this.state.data}
                 columns={this.state.columns}
                 filterable={this.state.filterable}/>
             </div>
         );
     }
 }
 export default TableDetails;