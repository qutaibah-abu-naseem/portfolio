import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { api } from '../App';
import { Avatar } from '@mui/material';

const pages = ['Home', 'About','Skills', 'Project', 'Contact'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [shrink_header, setShrink_header] = React.useState(false);
  const context = React.useContext(api);

 
  
  React.useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 50) {
        setShrink_header(true);
      } else {
        setShrink_header(false);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (context) {
      context.setsection(''); // إعادة تعيين القسم
      setTimeout(() => {
        context.setsection(page);
      }, 10);
    }
  };

  return (
    <div className="w-100 flex justify-center">
      <AppBar position="static" sx={{ backgroundColor: 'rgb(19, 17, 17)', position: 'fixed', zIndex: 30, borderRadius: "40px", maxWidth: shrink_header ? '400px' : '90%', transition: 'max-width 0.4s ease', scale: shrink_header ? '0.85' : '1', margin: '20px 0' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {!shrink_header && (
              <>
                <Avatar sx={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black', mx: 3 }}> Q</Avatar>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    ms: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
              </>
            )}





            

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <IoMenu/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page,index) => (
                  <MenuItem key={index} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>











            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ms: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page,index) => (
                <Button
                  key={index}
                  id="text-after"
                  className={page === context.section ? 'focus' : ''}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'transparent' } }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {!shrink_header && (
              <p className='mx-5 my-auto hidden sm:block '>
                <IconButton color="primary" aria-label="LinkedIn" onClick={() => window.location.href = 'https://www.linkedin.com/in/for-work-188162357/'}>
                  <FaLinkedinIn className='text-gray-100 hover:text-sky-500 text-[20px] md:text-[23px]' />
                </IconButton>
                <IconButton color="primary" aria-label="Facebook" onClick={() => window.location.href = 'https://web.facebook.com/profile.php?id=61553706899823'}>
                  <FaFacebook className='text-gray-100 hover:text-sky-500 text-[20px] md:text-[23px] ' />
                </IconButton>
                <IconButton color="primary" aria-label="Facebook" onClick={() => window.location.href = 'https://wa.me/962797917763'}>
                  <FaWhatsapp className='text-gray-100 hover:text-sky-500 text-[20px] md:text-[23px]' />
                </IconButton>
              </p>
            )}

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
