import SingleProduct from "./single-product";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductsRow=(props)=>{
    return (
        <div className="row mt-3">
            <div className="col-12">
                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col-10"><Card.Title>{props.title}</Card.Title></div>
                            <div className="col-2"><input placeholder={"Search"} className={"form-control"}/></div>
                        </div>
                        <div className="row">

                            {props.products.map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)}
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}
export default ProductsRow;