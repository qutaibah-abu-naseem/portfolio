import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook, FaLinkedinIn} from 'react-icons/fa6'

const Footer = () => {
    const pages=['-Linked In','-Facebook','-Github','-Our E-comerce']
    return (
        <div className='w-100 bg-zinc-800 h-[fit-content] lg:h-[300px] py-4 mt-[75px]  '>
            <div className='w-[90%] mx-auto   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' >
            <div className='p-3'>
              <Typography variant='h5' color='white'>E-comerce Store</Typography>
             <p className='mt-5 text-gray-100 text-[19px]'>
             A simple online store that allows users to browse products and add them to the cart using React and Tailwind CSS.
             </p>
            </div>

            <div className='p-3'>
              <Typography variant='h5' color='white' >Important Link</Typography>
             <div className='mt-5 text-gray-100 text-[19px]'>
                {pages.map(ele=>(
                    <ul key={ele}>
                    <li >{ele}</li>
                </ul>
                ))}
                
             </div>
            </div>


            <div>
                <div className='p-3'>
                <Typography variant='h5' color='white' >Follow Us</Typography>
            <p className='mt-5 text-gray-100 text-[19px]'>
            <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>window.location.href='https://www.linkedin.com/in/for-work-188162357/'}>
            <FaLinkedinIn className='text-gray-100 hover:text-sky-500 '/>
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart"  onClick={()=>window.location.href='https://web.facebook.com/profile.php?id=61553706899823'}>
<FaFacebook className='text-gray-100 hover:text-sky-500 '/>
</IconButton>

            </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer