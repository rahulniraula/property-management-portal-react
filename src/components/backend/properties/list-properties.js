import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Action from "./action";

const ListProperties=()=>{
    const navigate=useNavigate();
    const [properties,setProperties]=useState([]);
    useEffect(()=>fetchProperties(),[])
    function fetchProperties(){
        axios({
            url:"/properties/"
        }).then(resp=>{
            setProperties(resp.data)
        }).catch();
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title">Properties List</h5>
                    </div>
                    <div className="col-6">
                        <button onClick={()=>navigate("/admin/properties/create")} className={"btn btn-primary float-end"}>
                            Create <i className={"bi bi-plus"}></i>
                        </button>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Property Type</th>
                        <th scope="col">Area</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {properties.map(p=>{
                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>{p.propertyType}</td>
                                <td>{p.area}</td>
                                <td>
                                    <Action></Action>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default ListProperties;