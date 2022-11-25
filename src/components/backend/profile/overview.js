import extractUserFromToken from "../../../util/util";

const Overview=()=>{
    const user=extractUserFromToken();
    return <div className={"tab-pane fade profile-overview active show"}  role="tabpanel">


        <h5 className="card-title">Profile Details</h5>

        <div className="row">
            <div className="col-lg-3 col-md-4 label ">Email</div>
            <div className="col-lg-9 col-md-8">{user?.email}</div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-md-4 label">First Name</div>
            <div className="col-lg-9 col-md-8">{user?.firstname}</div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-md-4 label">Last Name</div>
            <div className="col-lg-9 col-md-8">{user?.lastname}</div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-md-4 label">Phone Number</div>
            <div className="col-lg-9 col-md-8">{user?.phoneNumber}</div>
        </div>



    </div>
}
export default Overview;