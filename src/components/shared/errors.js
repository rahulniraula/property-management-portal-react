const Errors=(props)=>{
    console.log(props);
    if(props.errors.length>0){
        return (
            <div className="alert alert-danger">
                <ul>
                    {props.errors.map(error=><li key={error}>{error}</li>)}
                </ul>
            </div>
        );
    }else{
        return null;
    }

}
export default Errors;