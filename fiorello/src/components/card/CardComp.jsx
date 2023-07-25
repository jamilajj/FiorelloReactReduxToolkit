import React from 'react'
import { removeFromCard } from '../../redux/CardSlice'
import { useDispatch } from 'react-redux'
import PageContainer from '../../containers/PageContainer'


const CardComp = ({ card }) => {
  const dispatch = useDispatch()

  return (
    <PageContainer>
      <div className='my-10 flex items-center justify-between'>
        <img className='w-[200px] h-[150px] object-cover' src={card?.image} alt="" />
        <div>
          <div>{card?.title}</div>
          <div>{card?.description}</div>
        </div>
        <div>{card?.price}$({card?.quantity})</div>
        <div onClick={() => dispatch(removeFromCard(card?.id))} className='bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center'>Delete</div>
      </div>
    </PageContainer>
  )

}

export default CardComp