import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {catchErrorsFromResponse} from "../../../util/util";
import Errors from "../../fontend/shared/errors";

const CreateProperties=()=>{
    const navigate=useNavigate();
    const [propertyType,setPropertyType]=useState([]);
    const createForm=useRef();
    const [errors,setErrors]=useState([]);
    useEffect(()=>fetchPropertyType,[])
    function createProperty(event){
        event.preventDefault();
        let title=createForm.current.title.value;
        let price=createForm.current.price.value;
        let area=createForm.current.area.value;
        let propertyType=createForm.current.propertyType.value;
        let noOfRooms=createForm.current.noOfRooms.value;
        let buildDate=createForm.current.buildDate.value;
        let heatingSystem=createForm.current.heatingSystem.value;
        let coolingSystem=createForm.current.coolingSystem.value;
        let parking=createForm.current.parking.value;
        let description=createForm.current.description.value;
        const data={title,price,area,propertyType,noOfRooms,buildDate,heatingSystem,coolingSystem,parking,description};
        axios({
            url:"/properties/",
            method:"POST",
            data
        }).then(resp=>{
            navigate("/admin/properties/")
        }).catch(e=>{
            setErrors(catchErrorsFromResponse(e));

        });
    }
    function fetchPropertyType(){
        axios({
            url:'/configs/property-type/',
        }).then(resp=>{
            setPropertyType(resp.data)
        }).catch();
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title">Create Properties </h5>
                    </div>
                    <div className="col-6">
                        <button onClick={()=>navigate("/admin/properties/")} className={"btn btn-primary float-end"}>
                            List <i className={"bi bi-list"}></i>
                        </button>
                    </div>
                </div>

                <form className="row g-3" ref={createForm} onSubmit={createProperty}>
                    <Errors errors={errors}></Errors>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Property Title</label>
                        <input type="text" name={"title"} className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Property Price</label>
                        <input type="number" name={"price"} className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Property Area</label>
                        <input type="number" name={"area"} className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Property Type</label>
                        <select className={"form-control"} name={"propertyType"}>
                            {propertyType.map(p=><option key={p} value={p}>{p}</option>)}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Number Of Rooms</label>
                        <input type="number" name={"noOfRooms"} className="form-control"/>
                    </div>

                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Build Date</label>
                        <input type="date" name={"buildDate"} className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Heating System</label>
                        <select className={"form-control"} name={"heatingSystem"}>
                            {["Yes","No"].map(d=><option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Cooling System</label>
                        <select className={"form-control"} name={"coolingSystem"}>
                            {["Yes","No"].map(d=><option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Parking</label>
                        <select className={"form-control"} name={"parking"}>
                            {["Yes","No"].map(d=><option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputNanme4" className="form-label">Description</label>
                        <textarea name={"description"} className={"form-control"}></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Create Property</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default CreateProperties;