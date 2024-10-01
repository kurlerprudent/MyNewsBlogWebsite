import Image from 'next/image'
import Styles from './NewsCard.module.css'
import Link from 'next/link'
import { CommentOutlined, Style } from '@mui/icons-material'
import { ThumbUp } from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'
import image2 from '../Images/newsImage2.jpg'
import image3 from '../Images/newsImage7.jpg'
import image4 from '../Images/newsImage8.jpg'
import image5 from '../Images/newsImage9.jpg'
import image1 from '../Images/newsImage1.jpg'

const NewsCard = () => {

    const newsData = [
        {id:1, title:'Title', description:'Create a blog post subtitle that summarizes your....', dislikes:0, comments:0, likes:0, image:image1},
    
        {id:2, title:'Title', description:'Create a blog post subtitle that summarizes your....', dislikes:0, comments:0, likes:0, image:image2},
    
        {id:3, title:'Title', description:'Create a blog post subtitle that summarizes your....', dislikes:0, comments:0, likes:0, image:image3},
    
        {id:4, title:'Title', description:'Create a blog post subtitle that summarizes your....', dislikes:0, comments:0, likes:0,  image:image4},
    
        {id:5, title:'Title', description:'Create a blog post subtitle that summarizes your....', dislikes:0, comments:0, likes:0,  image:image5},
      ]

  return (
    <>  {
        newsData && newsData.map((data)=>(
        <Link href={`/news/${data.id}`}>
        <div key={data.id} className={Styles.container}>
            <div className={Styles.imageContainer}>
                <Image 
                src={data.image}
                alt='image'
                style={{width:'100%',height:'100%', objectFit:'cover'}}
                 />
            </div>
            <div className={Styles.content}>
                <h3 className={Styles.title}>{data.title}</h3>
                <p className={Styles.description}>{data.description}</p>
            </div>
            <div className={Styles.socialMediaIcons}>
                <div className={Styles.iconAndValue}>
                    {data.dislikes}
                    <ThumbDown sx={{fontSize:17}}/>
                    {data.likes}
                    <ThumbUp sx={{fontSize:17}}/>
                </div>
                <div className={Styles.iconAndValue}>
                    {data.comments}
                <CommentOutlined sx={{fontSize:17}}/>
                </div>
                
            </div>
        </div>
        </Link>
        ))}
    </>
  )
}

export default NewsCard