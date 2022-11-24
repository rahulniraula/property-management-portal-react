import {useRef, useState} from "react";
import axios from "axios";
import {catchErrorsFromResponse} from "../../../util/util";
import Errors from "../shared/errors";
import {toast} from "react-toastify";

const Offer = (props) => {
    const offerForm=useRef();
    const [errors,setErrors]=useState([]);
    function submitForm(event){
        event.preventDefault();
        axios({
            url:'/offers/',
            method:'post',
            data:{
                price:offerForm.current.price.value,
                message:offerForm.current.message.value,
                propertyId:props.property.id
            }
        }).then(resp=>{
            setErrors([])
            toast("Offer placed Successfully")
            props.success();
        }).catch(e=>{
            setErrors(catchErrorsFromResponse(e))
        });
    }
    return (
        <form className="row" ref={offerForm} onSubmit={submitForm}>
            <div className="col-12">
                <Errors errors={errors}></Errors>
            </div>
            <div className="col-12">
                <label htmlFor="inputNanme4" className="form-label">Your Offer Price</label>
                <input type="text" name={"price"} className="form-control" placeholder={"Enter the amount you wish to Offer"}/>
            </div>
            <div className="col-12">
                <label htmlFor="inputNanme4" className="form-label">Your Message</label>
                <textarea className={"form-control"} name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={"col-12 mt-3"}>
                <input type={"submit"} value={"Make An Offer"} className={"btn btn-primary btn-block"} style={{width:'100%'}}/>
            </div>

        </form>
    );
}
export default Offer;