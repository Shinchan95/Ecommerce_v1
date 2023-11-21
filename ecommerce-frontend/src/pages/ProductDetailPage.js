import NavBar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/ProductDetails";
import Footer from "../features/common/Footer";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetails></ProductDetails>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;