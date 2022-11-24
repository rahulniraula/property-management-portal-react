import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddToFavoriteList from "./add-to-favorite-list";
import CreateFavoriteList from "./create-favorite-list";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
const FavoriteWrapper=(props)=>{
    const [list,setList]=useState([]);
    const [view,setView]=useState("add");
    useEffect(fetchFavoriteList,[])
    function fetchFavoriteList(){
        axios({
            url:'/favorites/'
        }).then(resp=>{
            setList(resp.data)
        }).catch();
    }
    function createFavoriteList(data){
        axios({
            url:"/favorites/",
            method:"post",
            data
        }).then(
            resp=>{
                toast("Favorite List Created Successfully.")
                fetchFavoriteList();
                setView("add");
            }
        ).catch();
    }
    function create(event){
        event.preventDefault();
        setView("create");
    }
    return (
        <>
            {view==="add"?<AddToFavoriteList success={props.success} property={props.property} list={list} create={create}/>:<CreateFavoriteList property={props.property} createFavoriteList={createFavoriteList}/>}


        </>

    );
}
export default FavoriteWrapper;