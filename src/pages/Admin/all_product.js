import React, { Component } from "react";
import { Table,Button, ButtonToggle ,Alert,Tooltip} from "reactstrap";
import Sidebar from "./sideBar";
import { Link } from "react-router-dom";
import axios from "axios";
import C from "../../resource/values"
// import Alert from "./alert"
import './all_product.css'
import { FaCheck,FaRegWindowClose } from "react-icons/fa";
class UpdateProduct extends Component {
  constructor() {
    super();
    this.state = {
      model_open:false,
      name: ["abc", "xyz"],
      id: "",
      lastname: ["abc", "xyz"],
      users: [],
    };
    this.remove = this.remove.bind(this)
    this.searchFun = this.searchFun.bind(this)



  }

  componentDidMount = async () => {
    let a = await axios.get(C.SERVER_CALL + `/admin`);

    this.setState({ users: a.data });

  };

  //delete the user
  remove= async (id) => {

    var result = window.confirm("Want to delete?");
if (result) {

  await axios.delete(C.SERVER_CALL+`/admin/remove/`+ id);

   let a = await axios.get(C.SERVER_CALL + `/admin`);

   this.setState({ users: a.data });

   document.getElementById('alert').style.display='';

   setTimeout(function(){   document.getElementById('alert').style.display='none'; }, 3000);
}
 
}

//function for search bar
searchFun=()=>{

  let filter = document.getElementById("myInput").value.toUpperCase();
  
  let myTable = document.getElementById('myTable')

  let tr = myTable.getElementsByTagName('tr')

          for(let i=0;i<tr.length;i++){
              let td = tr[i].getElementsByTagName('td')[0];
              console.log(td)
if(td){
               let value = td.innerHTML.toUpperCase()
               if(value.indexOf(filter)>-1){
                   tr[i].style.display=""
               }else{
                  tr[i].style.display="none"
               }
            
                
}
          }
}



  render() {
    var sr = 0;

    return (
      <div className="container-all shadow">
    
        <Sidebar />
        <br></br>
        <input type="text" id="myInput" placeholder="search your item.." className="search-box" onChange={this.searchFun}/>
        <Alert id="alert"  style={{display:'none'}} color="danger">
       The Item is Deleted !!
      </Alert>
        <h3 className="h3 text-center my-3">
         Update the product
        </h3>
       
        <div className="container">
          <Table id='myTable' hover className="table">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((i) => (
                <tr >
                  <th scope="row">{(sr = sr + 1)}</th>
                 <td style={{cursor: "pointer"}} >    <Link to={`/admin/details/${i._id}`}>  {i.product_name}     </Link></td> 
                   <td style={{cursor: "pointer"}} >  <Link to={`/admin/details/${i._id}`}>{i.category}           </Link></td> 
                   <td style={{cursor: "pointer"}}>   <Link to={`/admin/details/${i._id}`}>{i.seller_name}        </Link></td>

                  <td>
                    <Link to={`/admin/update/${i._id}`}>
                              <button className="btn btn-primary" style={{ color:"white", border:"blue"}}>
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
              
 
                          <ButtonToggle color="danger" style={{ color: "white" }}onClick={()=>this.remove(i._id)}>Delete</ButtonToggle>
        
                  </td>
               
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default UpdateProduct;
