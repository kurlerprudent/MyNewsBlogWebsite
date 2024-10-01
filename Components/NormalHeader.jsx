import Image from 'next/image'
import Styles from './NormalHeader.module.css'
import { Divider } from '@mui/material'

const NormalHeader = ({heroName,pageTitle}) => {
  return (
    <div>
           <div>

    
<div className={Styles.container}>
    <h1 className={Styles.headerText}>
        The Hours
      
    </h1>
    <Divider orientation='vertical' sx={{borderRightWidth:4, borderRightColor:'black', height:'40%', marginTop:3}} />

    <h3 className={Styles.headerTextTwo}>News  & <br /> Opinion <br /> Blog </h3>
    </div>

    <div className={Styles.imageContainer}>
    <Image src={heroName} style={{width:'100%', height:'100%', objectFit:'cover'}}/>

    <div className={Styles.onImageContainer}>
        <h4 className={Styles.topic}>{pageTitle}</h4>
     
     
    </div>
    </div>
   
</div>
    </div>
  )
}

export default NormalHeader