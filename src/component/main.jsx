import { Button, Typography } from '@mui/material';
import { api } from '../App';
import { useContext, useEffect, useState } from 'react';

const Main = () => {
    const text = "Hello, my name is Qutaibah Mohamed, I live in Jordan";
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
        <div ref={context.refhome} className='h-[fit-content] md:h-[100vh] py-5   position-relative bg-gradient-to-r from-zinc-700  to-zinc-800'>
            <div className='grid  grid-cols-2  gap-3 h-[100%]'>
                <div className='col-span-2 row-span-2 md:col-span-1 md:row-span-2'>
                    <div className='mt-[120px] md:mt-[170px]   flex flex-col px-5 justify-between   w-[100%] min-h-[300px]'>
                    <Typography variant='h4' color='rgb(69, 187, 255)' sx={{width:'600px' }}  >
                    Qutaibah Mohamed

                        <Typography  color='rgb(245, 240, 240)' fontWeight="bold" sx={{ padding: '0 20px',fontSize:'22px' }}>
                           {current}{showCursor&&'|'}
                           </Typography>
                        </Typography>
                        <Button variant="contained" onClick={()=>context.setsection('Contact')} className='scale:scale-100 hover:scale-125 w-[100px] mx-auto ' sx={{ borderRadius: '30px', height: '40px', backgroundColor: 'rgb(0,0,0)',fontSize:'12px', transition: 'transform ease 0.5s', '&:hover': { backgroundColor: 'rgb(36, 35, 35)' } }} disableElevation>
                            contact
                        </Button>
                    </div>

                </div>
                <div className='col-span-2  md:col-span-1  '>
                    <div className='mt-[120px] md:mt-[200px] flex flex-col items-center justify-center w-[100%] '>
                        <img src="/image/my-phote.webp" alt="My photo" width={311} height={311} className="rounded-full shadow-lg shadow-cyan-200/50 animate-pulse duration-2" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Main