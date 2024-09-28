import Link from 'next/link'
import Styles from './NavBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const NavBar = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.navLinks}>
            <Link href='/' className={Styles.link}>Home</Link>
            <Link href='/about' className={Styles.link}>About</Link>
            <Link href='/news' className={Styles.link}>News</Link>
            <Link href='/contact' className={Styles.link}>Contact</Link>
        </div>
        <div className={Styles.rightSide}>
            <div className={Styles.searchBox}>
                <input type='text' placeholder='Search...' className={Styles.searchInput} />
                <div className={Styles.searchIcon}>
                    <SearchIcon sx={{fontSize:22}} />
                </div>
            </div>
            <div className={Styles.socialMedia}>
                <FacebookIcon sx={{fontSize:22, color:'white'}} />
                <WhatsAppIcon sx={{fontSize:22, color:'white'}} />
                <TwitterIcon sx={{fontSize:22, color:'white'}} />
                <InstagramIcon sx={{fontSize:22, color:'white'}} />
            </div>
        </div>
    </div>
  )
}

export default NavBar