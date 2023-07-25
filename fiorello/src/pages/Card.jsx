import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getcardTotal } from '../redux/CardSlice'
import CardComp from '../components/card/CardComp'
import PageContainer from '../containers/PageContainer'


const Card = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cards,totalAmount,itemsCount } = useSelector(state => state.cards)

    console.log(cards, totalAmount, itemsCount, "cards");

    useEffect(() => {
        dispatch(getcardTotal())
    }, [dispatch])
    return (
        <PageContainer>
<div>
<div className='h-60 place-items-start  '>
        <div className='pt-7'>
        <p className='text-5xl mb-2'>Cart</p>
        <p className='text-slate-550 text-base '>Where flowers are our inspiration</p>
        </div>
        
      </div>
</div>
      
        <div>
            {
                cards?.length > 0 ? <div>
                    {
                        cards?.map((card, i) => (
                            <CardComp key={i} card={card} />
                        ))

                    }
                    <div className='flex items-center justify-end text-2xl '>total amount:<span className='text-red-500'>{totalAmount}$</span></div>
                </div> :
                    <div className='h-64'>Card is empty...</div>
            }
        </div>
        </PageContainer>
    )
}

export default Card