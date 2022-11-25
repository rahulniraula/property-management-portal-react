import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Action from "./action";
import {toast} from "react-toastify";

const OfferList=(props)=>{
    const params=useParams();
    const [offers,setOffers]=useState([]);
    const loc=useLocation();
    function fetchOffers(){
        axios({
            url:"/properties/"+params.id+"/offers/"
        }).then(resp=>{
            setOffers(resp.data)
        }).catch();
    }
    useEffect(fetchOffers,[params.id])
    function rejectOffer(event,offer){
        // console.log(event,offer)
        axios({
            url:"/offers/"+offer.id+"/REJECTED/",
            method:"PUT"
        }).then(resp=>{
            toast("Offer Rejected")
            fetchOffers();
        }).catch();
    }
    function acceptOffer(event,offer){
        // console.log(event,offer)
        axios({
            url:"/offers/"+offer.id+"/ACCEPTED/",
            method:"PUT"
        }).then(resp=>{
            toast("Offer Accepted")
            fetchOffers();
        }).catch();
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Offers for {loc?.state?.title}</h5>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Message</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {offers.map(o=><tr key={o.message}>
                        <th scope="row">1</th>
                        <td>{o.message}</td>
                        <td>{o.price}</td>
                        <td><Action offer={o} acceptOffer={(event)=>acceptOffer(event,o)} rejectOffer={(event)=>rejectOffer(event,o)}></Action></td>
                    </tr>)}

                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default OfferList;