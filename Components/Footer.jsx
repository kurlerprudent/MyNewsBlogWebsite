import Link from 'next/link'
import Styles from './Footer.module.css'
import Facebook from '@mui/icons-material/Facebook'
import WhatsApp from '@mui/icons-material/WhatsApp'
import Instagram from '@mui/icons-material/Instagram'
import { CheckBox, Twitter } from '@mui/icons-material'
import { Button } from '@mui/material'


const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.firstSection}>
        <div className={Styles.form}>
          <h4 className={Styles.subs}>Subscirbe to Our Newsleter</h4>
          <h5 className={Styles.mailText}>Enter your email here *</h5>
          <input type="text"  className={Styles.inputMail}/>

          <div className={Styles.secondSectionContainer}>
              <div className={Styles.insideContainer}>
                <CheckBox />
                <p>Yes, Subscribe me to your newsletter.</p>
              </div>
              <div>
                <Button sx={{width:200, background:'#2A53C1', color:'white', fontWeight:'600'}}>Subscribe</Button>
              </div>
          </div>
          <div className={Styles.socialMediaIcons}>
              <Facebook className={Styles.facebook}/>
              <WhatsApp className={Styles.whatsApp}/>
              <Instagram className={Styles.instagram}/>
              <Twitter className={Styles.twitter}/>
          </div>
        </div>
        <div className={Styles.navLinks}>
          <Link className={Styles.link } href='/'>Home</Link>
          <Link className={Styles.link} href='/about'>About</Link>
          <Link className={Styles.link} href='/news'>News</Link>
          <Link className={Styles.link} href='/contact'>Contact</Link>
        </div>
      </div>
      
      <div>© 2024 by TheHours. Powered and secured by Kurler.dev</div>
    </div>
  )
}

export default Footer