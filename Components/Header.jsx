import { Divider } from '@mui/material'
import Styles from './Header.module.css'
import news from '../public/news.mp4'

const Header = () => {
  return (
    <>
    <div>

    
    <div className={Styles.container}>
        <h1 className={Styles.headerText}>
            The Hours
          
        </h1>
        <Divider orientation='vertical' sx={{borderRightWidth:4, borderRightColor:'black', height:'40%', marginTop:3}} />

        <h3 className={Styles.headerTextTwo}>News  & <br /> Opinion <br /> Blog </h3>
        </div>

        <div className={Styles.videoContainer}>
        <video src={news} autoPlay muted loop style={{height:'100%', width:'100%', objectFit:'cover'}} />

        <div className={Styles.onVideoContainer}>
            <h4 className={Styles.topic}>Breaking News:</h4>
            <p className={Styles.textIn} style={{animationDelay: '0s'}}>President elect to be announced</p>
            <p className={Styles.textIn} style={{animationDelay: '0s'}}>President elect to be announced</p>
            <p className={Styles.textIn} style={{animationDelay: '0s'}}>President elect to be announced</p>
         
        </div>
        </div>
       
    </div>

   
    </>
  )
}

export default Header