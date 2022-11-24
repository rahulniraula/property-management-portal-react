import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddToFavoriteList=(props)=>{

    const myForm=useRef();
    function submit(event){
        event.preventDefault();
        axios({
            url:'/favorites/'+myForm.current.listId.value+"/"+props.property.id,
            method:"post"
        }).then(resp=>{
            toast("Property Added to Favorite List Successfully")
            props.success();
        }).catch();
    }
    return (
        <div className="card">
            <div className="card-body">
                <form className="row g-3" ref={myForm} onSubmit={submit}>
                    <div className="col-10">
                        <label htmlFor="inputNanme4" className="form-label">Select List</label>
                        <select className={"form-control"} name={"listId"}>
                            <option disabled={true}>Select Favorite list</option>
                            {props.list.map(l=><option value={l.id} key={l.id}>{l.name}</option>)}
                        </select>
                    </div>
                    <div className={"col-2"}>
                        <label className="form-label" htmlFor=""></label>
                        <button onClick={props.create} className={"btn btn-block btn-success mt-4"}><i className={"bi bi-plus"}></i></button>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Add To Favorite List</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default AddToFavoriteList;