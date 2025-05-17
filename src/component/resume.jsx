import React, { useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { api } from '../App';
import { FaFileDownload } from "react-icons/fa";
const Resume = () => {
  const swiperRef = useRef(null);
const context=useContext(api)
  const slides = ['/image/section1.webp', '/image/sec2.webp'];

  return (
    <div className="my-5 w-full" ref={context.refResume}>
      <h1 className="mx-auto text-center text-4xl font-bold mb-5">Resume</h1>

      <div className="w-[90%] mx-auto relative">
        {/* أزرار التنقل المخصصة */}
        <IconButton
          onClick={() => swiperRef.current?.slidePrev()}
          className="!absolute top-[45%] left-0 z-50 bg-white/80 hover:bg-white"
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={() => swiperRef.current?.slideNext()}
          className="!absolute top-[45%] right-0 z-50 bg-white/80 hover:bg-white"
        >
          <ArrowForwardIos />
        </IconButton>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((item) => (
            <SwiperSlide key={item}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    <img src={item} className="mx-auto w-full h-auto rounded-md" />
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
         <Button  sx={{width:'fit-content',backgroundColor:'rgb(58, 57, 57)',my:3,ml:4}} >
        <a className='text-zinc-100 flex items-center gap-2' href='/public/image/Qutaibah-res.pdf' style={{textDecoration:'none'}} download={true}>
       <FaFileDownload className='text-[18px]'/>
        download cv
        </a></Button>
      </div>
    </div>
  );
};

export default Resume;
