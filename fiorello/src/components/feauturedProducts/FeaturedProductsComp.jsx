import React from 'react'
import Product from '../Home/Product';

const FeaturedProductsComp = ({products}) => {
	const filteredProduct = products.filter((product) => {
		return Product.rating >= 4.5;
	});
	console.log(filteredProduct);

  return (
	<div>FeaturedProductsComp</div>
  )
}





export default FeaturedProductsComp