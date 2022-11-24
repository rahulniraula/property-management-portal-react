import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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
                        <td>28</td>
                    </tr>)}

                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default OfferList;