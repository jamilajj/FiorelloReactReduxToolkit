import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getExperts } from '../../redux/ExpertSlice';
import Loading from '../Loading';



const Experts = () => {
    const dispatch = useDispatch();
    const { experts } = useSelector(state => state.experts)

    console.log(experts, "expert")

    useEffect(() => {
        dispatch(getExperts())
    }, [dispatch])

    return (

        <div className='flex justify-between'>
          
            {
                experts == "LOADING" ? <Loading /> :



                    <>
                        {
                            experts?.map((expert) => (
                                <div>
                                    <figure class=" bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                        <img class="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto" src={expert.image} alt="" width="384" height="512" />
                                        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">

                                            <figcaption class="font-medium">
                                                <div class="text-sky-500 dark:text-sky-400">
                                                    {expert?.username}
                                                </div>
                                                <div class="text-slate-700 dark:text-slate-500">
                                                    {expert?.email}
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>


                            ))
                        }
                    </>

            }
        </div>

    )
}

export default Experts