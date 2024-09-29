import Image from 'next/image'
import Styles from './NewsCard.module.css'
import gal from '../Images/gal.jpg'
import { CommentOutlined, Style } from '@mui/icons-material'
import { ThumbUp } from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'

const NewsCard = () => {
  return (
    <div className={Styles.container}>
        <div>
            <Image src={gal} alt='' style={{width:'100%', height:170}}/>
        </div>
        <div className={Styles.content}>
            <h2>Title of the News</h2>
            <p>Lorem, ipsum dolor sit amet consectetur.... </p>
        </div>
        <div className={Styles.reactions}>
            <div className={Styles.thumbs}>0
                <ThumbDown  sx={{fontSize:17, color:'black'}}/>
                0
                <ThumbUp sx={{fontSize:17, color:'black'}}/>
            </div>
            <div className={Styles.comment}>
                0
            <CommentOutlined sx={{fontSize:17, color:'black'}}/>
            </div>
          
        </div>
    </div>
  )
}

export default NewsCard