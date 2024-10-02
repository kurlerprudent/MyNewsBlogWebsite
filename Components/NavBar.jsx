"use client"

import Link from 'next/link'
import Styles from './NavBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { usePathname } from 'next/navigation';


const NavBar = () => {
    const pathName = usePathname()

  return (
    <div className={Styles.container}>
        <div className={Styles.navLinks}>
            <Link href='/' className={`${Styles.link} ${pathName === '/' ? Styles.active : ''}`}>Home</Link>
            <Link href='/about' className={`${Styles.link} ${pathName === '/about' ? Styles.active : ''}`}>About</Link>
            <Link href='/news' className={`${Styles.link} 
            ${pathName === '/news' ? Styles.active : ''}`}>News</Link>
            <Link href='/contact' className={`${Styles.link} ${pathName === '/contact' ? Styles.active : '' }`}>Contact</Link>
        </div>
        <div className={Styles.rightSide}>
            <div className={Styles.searchBox}>
                <input type='text' placeholder='Search...' className={Styles.searchInput} />
                <div className={Styles.searchIcon}>
                    <SearchIcon sx={{fontSize:22}} />
                </div>
            </div>
            <div className={Styles.socialMedia}>
                <FacebookIcon className={Styles.facebook} sx={{fontSize:22, color:'white'}} />
                <WhatsAppIcon className={Styles.whatsApp} sx={{fontSize:22, color:'white'}} />
                <TwitterIcon className={Styles.twitter} sx={{fontSize:22, color:'white'}} />
                <InstagramIcon className={Styles.instagram} sx={{fontSize:22, color:'white'}} />
            </div>
        </div>
    </div>
  )
}

export default NavBar