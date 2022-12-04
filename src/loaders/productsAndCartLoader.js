import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //Get products
    const productsData = await fetch('https://ema-john-server-psi.vercel.app/products');
    const {products} = await productsData.json();

    //Get Cart
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log(products);
    for(const id in savedCart){
        const addedProducts = products.find(product=> product._id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts);

        }
    }
    return {products: products, initialCart: initialCart};
}