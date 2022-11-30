import { Img } from "pages/Home/Home.styled";
import {
    Box,
    Typography
} from '@mui/material';


const Home = () => {
    return (
         <Box sx={{mx: 'auto',}}>
             <Typography variant="h3" component="h1" sx={{ textAlign: 'center', mt: 2, mb: 5 }}>
          My Phone Book
        </Typography>
            <Img src="https://i.pinimg.com/564x/e6/c9/a6/e6c9a67a1d7260dac7660a4be66cbd2f.jpg" alt="phone" />
        </Box>
    )
}

export default Home;