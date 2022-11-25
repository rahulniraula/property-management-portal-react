import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Action from "./action";
import {toast} from "react-toastify";

const ListUsers=()=>{
    const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    useEffect(()=>fetchUsers(),[])
    function fetchUsers(){
        axios({
            url:"/users/"
        }).then(resp=>{
            setUsers(resp.data)
        }).catch();
    }
    function changeUserStatus(event,status,user){
        event.preventDefault();
        axios({
            url:`/users/${user.id}/${status}`,
            method:"PUT"
        }).then(resp=>{
            toast(status==="ACTIVE"?"User Activated Successfully":"User Deactivated Successfully");
            fetchUsers();
        }).catch();
        console.log(status);
    }
    function editUser(event){
        event.preventDefault();
    }
    function deleteUser(event){
        event.preventDefault();
    }
    function resetPassword(event){
        event.preventDefault();
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title">Users List</h5>
                    </div>
                    <div className="col-6">
                        {/*<button onClick={()=>navigate("/admin/users/create")} className={"btn btn-primary float-end"}>*/}
                        {/*    Create <i className={"bi bi-plus"}></i>*/}
                        {/*</button>*/}
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Roles</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(p=>{
                        return (
                            <tr key={p.id}>
                                <th scope="row">1</th>
                                <td>{p.firstname}</td>
                                <td>{p.lastname}</td>
                                <td>{p.email}</td>
                                <td>{p.phoneNumber}</td>
                                <td>{p?.roles[0]?.role}</td>
                                <td>
                                    <Action user={p} changeUserStatus={changeUserStatus}
                                            editUser={editUser}
                                            deleteUser={deleteUser}
                                            resetPassword={resetPassword}></Action>
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
export default ListUsers;