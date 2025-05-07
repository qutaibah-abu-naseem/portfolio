import { Card, Typography } from "@mui/material"
import { motion } from 'framer-motion';
const My_card = ({ icon, text, title, ms }) => {
    return (
        <motion.div initial={{opacity:0,y:-30}} transition={{duration:0.5}} whileInView={{opacity:1,y:0}} className="col-span-1 row-span-1">
              <Card
            
            sx={{
                p: 2,
                width: {
                    xs: '90%',     // أقل من sm
                    sm: '50%'      // sm وما فوق
                },
                margin: {
                    xs: '0 auto',  // فقط في xs يتوسّط
                    sm: 0          // فوق sm لا يوجد توسيط
                },
                marginLeft: {
                    sm: ms         // من sm وما فوق يطبق ms
                }
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 'fit-content',
                    gap: 3,
                    mb: 2                }}
            >
                <p>{icon}</p><p>{title}</p>
            </Typography>
            <Typography>{text}</Typography>
        </Card>
        </motion.div>
      
    );
};


export default My_card