import { Card, Typography } from '@mui/material'
import React from 'react'
const Skill = () => {
    return (
        <div className="w-100 h-[1000px] md:h-[100vh] my-[200px] " >
            <Typography variant="h4" sx={{ textAlign: 'center', my: 5 }}>skills</Typography>
            <div className="w-[90%] h-[100%] mx-auto flex justify-center mt-[100px]">


                <div className="  w-[10px] h-[100%] bg-zinc-800 rounded-5 mx-3 hidden md:block">
                </div>


                <div className=" h-[400px] py-3 flex flex-col gap-5 mt-4">

                    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-3">
                        <Typography variant='h5' className='w-[200px] flex'> Frontend skils <p className='hidden md:block'>={'>'}</p> </Typography>
                        <Card sx={{ width: '400px', height: '150px', padding: '15px', backgroundColor: 'rgb(31, 29, 29)', borderRadius: '20px' }}>
                            <Typography variant='h6' color='white'>
                                HTML5

                                CSS / Tailwind CSS

                                JavaScript /

                                React.js /

                                Bootstrap / Material UI /
                                Framer Motion
                            </Typography>
                        </Card>
                    </div>
                    

                    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-3">
                        <Typography variant='h5' className='w-[200px] flex'>Other Skills <p className='hidden md:block'>={'>'}</p></Typography>
                        <Card sx={{ width: '400px', height: '150px', padding: '15px', backgroundColor: 'rgb(31, 29, 29)', borderRadius: '20px' }}>
                            <Typography variant='h6' color='white'>
                            Git & GitHub
                                VS Code /
                                Vercel / 
                                Responsive Design
                                / performance
                            </Typography>
                        </Card>
                    </div>


                    <div className="flex  flex-col md:flex-row items-center gap-5 md:gap-3">
                        <Typography variant='h5' className='w-[250px] flex'> Currently Learning <p className='hidden md:block'>={'>'}</p></Typography>
                        <Card  sx={{ width: 'fit-content', height: 'fit-content', padding: '15px', backgroundColor: 'rgb(31, 29, 29)', borderRadius: '20px' }}>
                            <Typography variant='h6' color='white'>
                              TypeScript / next.js
                              </Typography>
                        </Card>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default Skill