import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/vendor/quill/quill.snow.css";
import "../../assets/vendor/quill/quill.bubble.css";
import "../../assets/vendor/remixicon/remixicon.css";
import "../../assets/vendor/simple-datatables/style.css";
import "../../assets/css/style.css";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import ContentArea from "./content/content-area";
const AdminWrapper=()=>{
    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <ContentArea></ContentArea>
        </>
    );
}
export default AdminWrapper