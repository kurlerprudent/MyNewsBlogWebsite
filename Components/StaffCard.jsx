import Image from 'next/image'
import Styles from './StaffCard.module.css'
import Twitter from '@mui/icons-material/Twitter'
import { LinkedIn } from '@mui/icons-material'

const StaffCard = ({staffContact,staffImage,staffMail,staffName,staffTitle}) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.imageContainer}>
            <Image alt='image' src={staffImage} style={{width:'100%', height:'100%',objectFit:'cover'}}/>
        </div>
        <div className={Styles.title}>{staffTitle}</div>
        <div className={Styles.content}>
            <p>{staffName}</p>
            <p>{staffMail}</p>
            <p>{staffContact}</p>
        </div>
        <div className={Styles.socialMediaIcons}>
            <Twitter className={Styles.icon}/>
            <LinkedIn className={Styles.icon}/>
        </div>
    </div>
  )
}

export default StaffCard