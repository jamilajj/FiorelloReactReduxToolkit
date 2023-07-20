import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getcardTotal } from '../redux/CardSlice'
import CardComp from '../components/card/CardComp'


const Card = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cards,totalAmount,itemsCount } = useSelector(state => state.cards)

    console.log(cards, totalAmount, itemsCount, "cards");

    useEffect(() => {
        dispatch(getcardTotal())
    }, [dispatch])
    return (
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
                    <div>Card is empty...</div>
            }
        </div>
    )
}

export default Card