import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getCategoryProducts } from '../../redux/ProductSlice'
import LOADING from "../Loading"
import Product from "./Product"
import ReactPaginate from 'react-paginate'

function Products({ category, sort }) {
    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector(state => state.products);

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    console.log(sort, "sort");

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category))
        } else {
            dispatch(getProducts());
        }

    }, [dispatch, category]);

    return (
        <div>
            {
                productsStatus == "LOADING" ? <LOADING /> :
                    <>
                        <div className='flex flex-wrap'>
                            {
                                currentItems?.sort((a, b) => sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : null )?.map((product, i) => (
                                    <Product key={i} product={product} />
                                ))
                            }
                        </div>
                        <ReactPaginate
                            className="paginate"
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </>
            }

        </div>

    );

}
export default Products
