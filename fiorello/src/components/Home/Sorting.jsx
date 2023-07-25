import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div  className='flex items-center justify-end'>
        <select onChange={e=>setSort(e.target.value)} className='bg-gray-200 py-2 px-4 hover' name='' id=''> 
            <option disabled value="1">Sort by</option>
            <option  value="inc">Artan</option>
            <option value="dec">Azalan </option>
            <option value="feautured">Feautured</option>
        </select>
    </div>
  )
}

export default Sorting