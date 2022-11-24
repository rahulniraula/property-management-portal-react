import {useRef} from "react";
import axios from "axios";

const Offer = (props) => {
    const offerForm=useRef();
    function submitForm(){
        axios({
            url:'',
            method:'post',
            data:{
                offer:offerForm.current.offer.value,
                message:offerForm.current.message.value,
            }
        }).then(resp=>{

        }).catch();
    }
    return (
        <form className="row" ref={offerForm} onSubmit={submitForm}>
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