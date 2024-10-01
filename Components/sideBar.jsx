"use client"
import Styles from './SideBar.module.css'
import LanguageIcon from '@mui/icons-material/Language';

const SideBar = () => {
  const scrollToTop = ()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.firstSection}>
        <LanguageIcon sx={{color:'white'}}/>
      </div>
      <div className={Styles.seconSection} 
      onClick={scrollToTop}
      >
        Back to Top
        </div>
    </div>
  )
}

export default SideBar