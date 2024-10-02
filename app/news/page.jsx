import NormalHeader from "@/Components/NormalHeader"
import hero5 from '../../Images/hero4.jpg'
import Styles from './page.module.css'
import Link from "next/link"
import image1 from '../../Images/newsImage1.jpg'
import Image from 'next/image'
import { Divider } from "@mui/material"
import { Share } from "@mui/icons-material"
import image2 from '../../Images/newsImage2.jpg'
import image3 from '../../Images/newsImage7.jpg'
import image4 from '../../Images/newsImage8.jpg'
import image5 from '../../Images/newsImage9.jpg'
import image6 from '../../Images/newsImage10.jpg'

const page = () => {
  const newsData = [
    {id:1, title:'Title', description:'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....', views:0, comments:0, likes:0, date:'Sep 29, 2024', time:'1min', admin:'Admin',image:image1},

    {id:1, title:'Title', description:'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....', views:0, comments:0, likes:0, date:'Sep 29, 2024', time:'1min', admin:'Admin',image:image2},

    {id:1, title:'Title', description:'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....', views:0, comments:0, likes:0, date:'Sep 29, 2024', time:'1min', admin:'Admin',image:image3},

    {id:1, title:'Title', description:'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....', views:0, comments:0, likes:0, date:'Sep 29, 2024', time:'1min', admin:'Admin', image:image4},

    {id:1, title:'Title', description:'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....', views:0, comments:0, likes:0, date:'Sep 29, 2024', time:'1min', admin:'Admin', image:image5},
  ]



  return (
    <div>
      <NormalHeader pageTitle='All News'heroName={hero5}/>

      <div className={Styles.container}>
        <div className={Styles.nextContainer}>

        
          <div className={Styles.newsLinks}>
            <Link className={Styles.links} href='/news/#'>All Posts</Link>
            <Link className={Styles.links} href='/news/#'>Politics</Link>
            <Link className={Styles.links} href='/news/#'>Opinions</Link>
            <Link className={Styles.links} href='/news/#'>Sport</Link>
            <Link className={Styles.links} href='/news/#'>Entertainment</Link>
          </div>

          <div className={Styles.allNewsCardsContainer}>
            {
              newsData && newsData.map((data)=>(
            
            <div key={data.id} className={Styles.newsCard}>
              <div className={Styles.imageContainer}>
                <Image alt="image" src={data.image} style={{width:'100%', height:'100%',objectFit:'cover'}}/>
              </div>
              <div className={Styles.content} >
                <div className={Styles.adminAndDateAndMenu}>
                  <div className={Styles.adminAndDate}>
                    <p>{data.admin}</p>
                    <p>{data.date}<span>{data.time}</span> </p>
                  </div>
                  <div>
                    <Share sx={{fontSize:17, fontWeight:'600',color:'blue'}}/>
                  </div>
                </div>
               
                <div className={Styles.title}>
                  {data.title}
                </div>
                <div className={Styles.description}>
               {data.description}
                </div>
                <Divider/>
                <div className={Styles.viewsAndCommentsAndLikes}>
                  <div className={Styles.viewsAndComments}>
                    <div className={Styles.views}>
                      <p>{data.views}</p>
                      <p>views</p>
                    </div>
                    <div className={Styles.comments}>
                      <p>{data.comments}</p>
                      <p>comments</p>
                    </div>
                  </div>
                
                  <div className={Styles.likes}>
                    <p>{data.likes}</p>
                    <p>likes</p>
                  </div>
                </div>
              </div>
            </div>  

))}
          </div>
          </div>
      </div>
    </div>
  )
}

export default page