import { Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { api } from '../App';

const Project = () => {
    const context=useContext(api)
    return (
        <div className="h-[fit-content] w-full mt-[100px]" ref={context.refproject}>
            <Typography variant="h4" className="text-center">Project</Typography>
            <div className="w-full md:w-[90%] mx-auto mt-[100px]">
                <div className="p-2 flex flex-col items-center gap-3">
                    <img
                        className="w-full sm:w-[90%] md:w-[80%]"
                        src="/image/img-project.webp" // مسار الصورة المعدل
                        loading='lazy'
                        alt="Project screenshot"
                        style={{ height: '400px' }}
                        width={1200}
                        height={400}
                    />
                    <div className="p-3 flex flex-col gap-3 mt-3 w-full sm:w-[90%] md:w-[80%]">
                        <Typography variant="h4">e-commerce</Typography>
                        <div>
                            <Typography variant="h6">
                                A simple online store that allows users to browse products and add them to the cart using React and Tailwind CSS.
                                <br />
                                <Typography variant="body2" className="mt-[30px] text-zinc-900 font-bold">
                                    Technologies used: React, MUI, Tailwind, Motion
                                </Typography>
                            </Typography>
                            <div className="flex gap-5 mt-[40px]">
                                <Button onClick={()=>{window.location.href='https://github.com/qutaibah-abu-naseem/first-shop'}} className="px-2" sx={{ backgroundColor: 'rgb(39, 37, 37)', color: 'white', textTransform: 'capitalize' }}>
                                     Visit GitHub
                                </Button>
                                <Button onClick={()=>{window.location.href='https://modren-five.vercel.app/'}} className="px-2" sx={{ backgroundColor: 'rgb(39, 37, 37)', color: 'white', textTransform: 'capitalize' }}>
                                    Visit Website
                                </Button>
                            </div>
                            <h1 className='text-red-500 text-[20px] mt-5'>note:The site is constantly being updated.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
