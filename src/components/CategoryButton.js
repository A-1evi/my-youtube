import React from 'react'

const CategoryButton = ({category}) => {
  return (
    <div className='py-2 px-2 mx-1 text-lg font-bold bg-gray-300 rounded-xl hover:bg-blue-300 transition duration-300'>
        <button>{category}</button>
    </div>
  )
}

export default CategoryButton