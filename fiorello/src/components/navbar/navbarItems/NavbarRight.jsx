import React, { useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillBasketFill } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { getcardTotal, removeFromCard } from '../../../redux/CardSlice'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';




const NavbarRight = ({ productDetail }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cards } = useSelector(state => state.cards)
  

    // modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    //   modal



    useEffect(() => {
        dispatch(getcardTotal())
    }, [dispatch])
    return (

        <div className='flex items-center gap-8'>
            <div className='flex border p-3 items-center rounded-full bg-gray-200'>

                <input className='bg-gray-200 outline-none gap-10' type="text" placeholder='Search...' />
                <BiSearch size={25} />
            </div>

            <div className='relative' >
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{cards?.length}</div>
                <BsFillBasketFill className='cursor-pointer' onClick={openModal} size={28} />
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

                    <div><img src={productDetail?.image} alt="" /></div>
                    <div>
                        <div>{productDetail?.title}</div>
                        <div>{productDetail?.description}</div>
                    </div>
                    <div>{productDetail?.price}$({productDetail?.quantity})</div>
                    <div onClick={() => dispatch(removeFromCard(productDetail?.id))} className='bg-red-500 text-white w-[50px] text-sm cursor-pointer rounded-md h-8 flex items-center justify-center'>Delete</div>

                    <div className='flex justify-between'>
                        <button className='mr-5 bg-gray-400 rounded px-2 hover:text-xl' onClick={() => navigate("card")} >View Card</button>

                        <button className=' bg-red-400 rounded px-2 hover:text-xl'>Check Out</button>

                    </div>


                </Modal>
            </div>
            
        </div >

    )
}

export default NavbarRight
