import Styles from './SideBar.module.css'
import LanguageIcon from '@mui/icons-material/Language';

const SideBar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.firstSection}>
        <LanguageIcon sx={{color:'white'}}/>
      </div>
      <div className={Styles.seconSection}>Back to Top</div>
    </div>
  )
}

export default SideBar