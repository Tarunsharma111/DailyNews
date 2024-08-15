import React from 'react'
import loading from './loading.gif'
import Spinner from './Spinner.gif'

 const Loader = () => {
    return (
      <div className='text-center'>
        <img className='my-3' src={document.body.style.backgroundColor === 'rgb(15, 4, 46)' ? Spinner:loading} alt="loading" />
      </div>
    )
}

export default Loader