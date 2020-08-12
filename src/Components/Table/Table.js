import React from "react";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import "../Table/Table.css";

 class TableDetails extends React.Component{
     constructor(props)
     {
         super(props);
         this.state={
             data:[],
             resizable:true,
             sortable:true,
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
                    width:400
                  }
              
             ]
         }
     }
    
     render()
     {
         return(
             <div className="table-of-details">
                 <ReactTable
                 className="table-details"
                 data={this.props.data}
                 columns={this.state.columns}
                 pageSize={(this.props.data.length > 10) ? 10 : this.props.data.length}
                 filterable={this.state.filterable}
                 resizable= {this.state.resizable}
                 sortable={this.state.sortable}/>
             </div>
         );
     }
 }
 export default TableDetails;