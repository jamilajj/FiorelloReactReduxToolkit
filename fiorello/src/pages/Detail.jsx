import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductsDetail } from '../redux/ProductSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading';
import PageContainer from '../containers/PageContainer';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProductsDetail(id))
    }, [dispatch, id])
    console.log(productDetail, "productDetail")
    return (

        <div>
            <PageContainer>
                {
                    productDetailStatus == "Loading" ? <Loading /> : <DetailComp productDetail={productDetail} />
                }
            </PageContainer>
        </div>
    )
}

export default Detail