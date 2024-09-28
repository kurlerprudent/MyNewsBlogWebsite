import { Divider } from '@mui/material'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={Styles.container}>
        <h1 className={Styles.headerText}>
            The Hours
          
        </h1>
        <Divider orientation='vertical' sx={{borderRightWidth:4, borderRightColor:'black', height:'40%', marginTop:3}} />
    </div>
  )
}

export default Header