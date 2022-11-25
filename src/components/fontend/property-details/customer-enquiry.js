import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";

const CustomerEnquiry=(props)=>{
    const fullNameR=useRef();
    const emailR=useRef();
    const phoneR=useRef();
    const messageR=useRef();
    function sendMessage(){
        axios({
            url:"/message/"+props?.property?.id+"/",
            method:'POST',
            data:{
                fullName:fullNameR.current.value,
                email:emailR.current.value,
                phone:phoneR.current.value,
                message:messageR.current.value,
            }
        }).then(resp=>{
            toast("Message sent to owner successfully");
        }).catch();
    }
    return (
        <div className={"row"} style={{backgroundColor:"#fafafa"}}>
            <h6 className={"text-center text-uppercase mt-2"}>Learn More about this property</h6>
            <div className="col-12">
                <label>Full Name</label>
                <input ref={fullNameR} type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="col-12">
                <label htmlFor="">Email</label>
                <input ref={emailR} type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-12">
                <label htmlFor="">Phone</label>
                <input ref={phoneR} type="text" className="form-control" placeholder="Phone Number" />
            </div>
            <div className={"col-12"}>
                <label htmlFor="">Message</label>
                <textarea ref={messageR} className={"form-control"}></textarea>
            </div>
            <div className={"col-12"}>
                <input type={"checkbox"}/><label htmlFor="">I Agree to the Terms and Condition</label><br/>
                <button onClick={sendMessage} className={"btn btn-primary btn-block"} style={{width:"100%"}}>Contact Owner</button>
            </div>
            <div className="col-12 text-opacity-25" style={{fontSize:"10px",textAlign:"justify"}} >
                <i>
                    By proceeding, you consent to receive calls and texts at the number you provided,
                    including marketing by autodialer and prerecorded and artificial voice, and email,
                    from realtor.com and others about your inquiry and other home-related matters,
                    but not as a condition of any purchase; this applies regardless of whether you check,
                    or leave un-checked, any box above. You also agree to our Terms of Use, and to our
                    Privacy Policy regarding the information relating to you. Msg/data rates may apply.
                    This consent applies even if you are on a corporate, state or national Do Not Call list.
                </i>
            </div>
        </div>
    );
}
export default CustomerEnquiry;