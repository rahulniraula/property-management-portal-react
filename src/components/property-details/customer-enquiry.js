const CustomerEnquiry=()=>{
    return (
        <div className={"row"} style={{backgroundColor:"#fafafa"}}>
            <h6 className={"text-center text-uppercase mt-2"}>Learn More about this property</h6>
            <div className="col-12">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="col-12">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="col-12">
                <label htmlFor="">Phone</label>
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className={"col-12"}>
                <label htmlFor="">Message</label>
                <textarea className={"form-control"}></textarea>
            </div>
            <div className={"col-12"}>
                <input type={"checkbox"}/><label htmlFor="">I Agree to the Terms and Condition</label><br/>
                <button className={"btn btn-danger btn-block"} style={{width:"100%"}}>Contact Owner</button>
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