import {useState} from "react";
import MyOfferHistory from "./my-offer-history";
import Overview from "./overview";
import FavoriteList from "./favorite-list";

const Profile=()=>{
    const [active,setActive]=useState("overview");
    return (
        <div className="card">
            <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered" role="tablist">

                    <li className="nav-item" role="presentation" onClick={()=>setActive("overview")}>
                        <button className={"nav-link "+((active=='overview')?'active':'')} data-bs-toggle="tab" data-bs-target="#profile-overview"
                                aria-selected="true" role="tab">Overview
                        </button>
                    </li>

                    <li className="nav-item" role="presentation" onClick={()=>setActive("myOffers")}>
                        <button className={"nav-link "+((active=='myOffers')?'active':'')} data-bs-toggle="tab" data-bs-target="#profile-edit"
                                aria-selected="false" role="tab" tabIndex="-1">My Offer History
                        </button>
                    </li>
                    <li className="nav-item" role="presentation" onClick={()=>setActive("favourite")}>
                        <button className={"nav-link "+((active=='favourite')?'active':'')} data-bs-toggle="tab" data-bs-target="#profile-overview"
                                aria-selected="true" role="tab">My Favourite List
                        </button>
                    </li>



                </ul>
                <div className="tab-content pt-2">

                    {active==='overview'?<Overview></Overview>:null}
                    {active=='myOffers'?<MyOfferHistory></MyOfferHistory>:null}
                    {active=='favourite'?<FavoriteList></FavoriteList>:null}
                </div>
            </div>
        </div>
    );
}
export default Profile;