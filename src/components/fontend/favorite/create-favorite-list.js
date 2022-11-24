import axios from "axios";
import {useEffect, useRef, useState} from "react";

const CreateFavoriteList=(props)=>{
    const favForm=useRef();
    function createFavoriteList(event){
        event.preventDefault();
        let data={
            name:favForm.current.ame.value
        };
        props.createFavoriteList(data);
    }
    return (
        <div className="card">
            <div className="card-body">

                <form className="row g-3" ref={favForm} onSubmit={createFavoriteList}>
                    <div className="col-12">
                        <label htmlFor="inputNanme4"  className="form-label">List Name</label>
                        <input type="text" name={"ame"} className="form-control" id="inputNanme4"/>
                    </div>

                    <div className="text-center">
                        <button type="submit"  style={{width:'100%'}} className="btn btn-primary">Create Favorite List</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default CreateFavoriteList;