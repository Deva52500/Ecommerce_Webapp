import React,{useState,useEffect} from 'react';
import PopularProducts from './PopularProducts';
import Cart from './Cart';
const products_API_URL="https://fakestoreapi.com/products";
function ProductsPage() {

  const [products, setProducts]=useState([]);
  const [selectedItem, setSelectedItem]= useState ([])
  const [showCart, setShowCart] = useState(false); 
  
  useEffect(() => {
    fetch(products_API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log("Data:", data);
      setProducts(data);
    })
  }, [])

  const onAddItem = (item) =>{
    setSelectedItem(prevSelectedItems => [...prevSelectedItems, item]);
  }

  useEffect(() => {
    console.log("selected Item", selectedItem);
  }, [selectedItem]); 

  const deleteOrder = (title) =>{
    setSelectedItem(selectedItem.filter((order) => order.title !==title))
  }

  const placeOrder = () => {
    
    window.alert("Order Placed");
    setSelectedItem([]); 
  }

  return (
    <div>
       <button class="btn btn-primary" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Back" : "My Cart"}
      </button>
      {showCart ? (
        <Cart selectedOrderItem={selectedItem} onPlaceOrder={placeOrder} onDelete={deleteOrder} />
      ) : (
        <PopularProducts products={products} addItem={onAddItem} />
      )}
     
    </div>          

  );
}     
export default ProductsPage;