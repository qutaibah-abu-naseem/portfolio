import { Button, Typography } from '@mui/material';
import { api } from '../App';
import { useContext, useEffect, useState } from 'react';
import { FaLinkedinIn,FaWhatsapp,FaFacebook } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';

const Main = () => {
    const text = "welcom in my portfolio";
    const [current, setCurrent] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const context = useContext(api);

    useEffect(() => {
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          if (index < text.length) {
            setIndex(prev => prev + 1);
          } else {
            setIsDeleting(true);
          }
        } else {
          if (index > 0) {
            setIndex(prev => prev - 1);
          } else {
            setIsDeleting(false);
          }
        }
  
        setCurrent(text.slice(0, index));
      }, isDeleting ? 100 : 300); // حذف أسرع من الكتابة
  
      return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);
  
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
  
      return () => clearInterval(cursorInterval);
    }, []);
  

    
    return (
        <div ref={context.refhome} className='h-[fit-content] md:h-[100vh] py-5  position-relative bg-gradient-to-r from-zinc-700  to-zinc-800'>
                        <Typography  color='rgb(245, 240, 240)' fontWeight="bold" sx={{ width:'fit-content',padding: '0 20px',fontSize:{xs:'15px',sm:'22px'},position:'absolute',margin:{xs:'70px 20%',md:'100px 35%' }}}>
                           {current}{showCursor&&'|'}
                           </Typography>

            <div className='grid  grid-cols-2  gap-3 h-[100%] mt-4'>
          
                <div className='col-span-2 row-span-2 md:col-span-1 md:row-span-2 ms-[-20px]'>
                    <div className='mt-[120px] md:mt-[170px]   flex flex-col px-5 justify-between   w-[100%] min-h-[300px]'>
                    <Typography variant='h4' color='rgb(69, 187, 255)' sx={{width:{xs:'240',md:'440px'},fontSize:{xs:'22px',sm:'32px'} }}  >
                    Qutaibah Mohamed

                        <Typography  color='rgb(245, 240, 240)' fontWeight="bold" sx={{ width:{xs:'280px',sm:'100%'},padding:{xs:'0 5px',sm:'0 20px'},fontSize:{xs:'18px',sm:'22px'},mt:3 }}>
                          i'm Frontend developer,live in jordan
                           </Typography>
                        </Typography>
                        <Button variant="contained" onClick={()=>context.setsection('Contact')} className='scale:scale-100 hover:scale-125 w-[100px] mx-auto ' sx={{ borderRadius: '30px', height: '40px', backgroundColor: 'rgb(0,0,0)',fontSize:'12px', transition: 'transform ease 0.5s', '&:hover': { backgroundColor: 'rgb(36, 35, 35)' } }} disableElevation>
                            contact
                        </Button>
                    </div>

                </div>
                <div className='col-span-2  md:col-span-1'>
                    <div className='mt-[120px] md:mt-[120px] flex flex-col items-center justify-center w-[100%] px-3 '>
                        <img src="/image/my-phote.webp" alt="My photo" width={311} height={311} className="rounded-full shadow-lg  shadow-cyan-200/50 animate-pulse duration-2" />
                    </div>
                    <p className='mx-5 my-auto block sm:hidden col-span-2  mt-3 flex justify-around'>
                <IconButton color="primary" aria-label="LinkedIn" onClick={() => window.location.href = 'https://www.linkedin.com/in/for-work-188162357/'}>
                  <FaLinkedinIn className='text-gray-100 hover:text-sky-500 text-[23px]' />
                </IconButton>
                <IconButton color="primary" aria-label="Facebook" onClick={() => window.location.href = 'https://web.facebook.com/profile.php?id=61553706899823'}>
                  <FaFacebook className='text-gray-100 hover:text-sky-500 text-[23px]' />
                </IconButton>
                <IconButton color="primary" aria-label="Facebook" onClick={() => window.location.href = 'https://wa.me/962797917763'}>
                  <FaWhatsapp className='text-gray-100 hover:text-sky-500 text-[23px]' />
                </IconButton>
              </p>

                </div>

            </div>

        </div>
    )
}

export default Main