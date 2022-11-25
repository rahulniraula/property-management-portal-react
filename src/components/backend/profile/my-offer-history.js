import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const MyOfferHistory=()=>{
    const [offers,setOffers]=useState([]);
    useEffect(fetchMyOffers,[])
    function fetchMyOffers(){
        axios({
            url:'users/1/offers/'
        }).then(resp=>{
            setOffers(resp.data)
        }).catch();
    }
    function cancelOffer(offer){
        axios({
            url:'/offers/'+offer.id+'/CANCELLED/',
            method:"put"
        }).then(resp=>{
            toast("Offer cancelled")
            fetchMyOffers();
        }).catch();
    }
    return (
        <div className="card">
            <div className="card-body">
                {/*<h5 className="card-title">Table with stripped rows</h5>*/}

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Property Name</th>
                        <th scope="col">Offered Price</th>
                        <th scope="col">Message</th>
                        <th scope="col">Actual Price</th>
                        <th scope="col">Property Status</th>
                        <th scope="col">Offer Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {offers.map(o=><tr key={o.id}>
                        <th scope="row">{o.id}</th>
                        <td>{o?.property?.title}</td>
                        <td>{o.price}</td>
                        <td>{o.message}</td>
                        <td>{o?.property?.price}</td>
                        <td>{o?.property?.status}</td>
                        <td>{o?.status}</td>
                        <td>
                            {o?.property?.status=="PENDING" && o?.status!=="CANCELLED"?<button className={"btn btn-danger"} onClick={()=>cancelOffer(o)}>Cancel Offer</button>:'No Action'}
                        </td>
                    </tr>)}

                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default MyOfferHistory;