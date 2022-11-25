import {useEffect, useState} from "react";
import axios from "axios";
import ListProperties from "../properties/list-properties";

const FavoriteList=()=>{
    const [favorites,setFavorites]=useState([]);
    useEffect(fetchFavorites,[])
    function fetchFavorites(){
        axios({
            url:'/favorites/'
        }).then(resp=>{
            setFavorites(resp.data);
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
                        <th scope="col">List</th>
                        <th scope="col">Properties</th>

                    </tr>
                    </thead>
                    <tbody>
                    {favorites.map(f=><tr key={f.id}>
                        <th scope="row">{f.id}</th>
                        <td>{f?.name}</td>
                        <td>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {f.properties.map(p=><tr>
                                    <td></td>
                                    <td>{p.title}</td>
                                    <td>
                                        {p.price}
                                    </td>
                                </tr>)}
                                </tbody>
                            </table>
                        </td>


                    </tr>)}

                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default FavoriteList;