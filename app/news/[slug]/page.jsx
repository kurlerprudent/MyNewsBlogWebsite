import NormalHeader from '@/Components/NormalHeader'
import Styles from './page.module.css'
import hero from '../../../Images/hero1.webp'
import Link from 'next/link'
import { Button, Divider } from '@mui/material'
import Image from 'next/image'
import { Comment, Facebook, Favorite, LinkedIn, Visibility, X } from '@mui/icons-material'
import image2 from '../../../Images/newsImage1.jpg' 


const page = () => {
  return (
    <div>
        <NormalHeader pageTitle='News' heroName={hero}/>
        <div className={Styles.container}>
            <div className={Styles.navLinksAndButton}>
              <div className={Styles.navLinks}>
                <Link href='/news'>All News</Link>
                <Link href='/news'>Politics</Link>
                <Link href='/news'>Sports</Link>
                <Link href='/news'>Opinions</Link>
                <Link href='/news'>Entertainment</Link>
              </div>
              <div className={Styles.buttonContainer}>
                <Link href='/admin'>
                <Button variant='outlined' sx={{width:150,}}>Admin</Button>
                </Link>
              </div>
            </div>
            <div className={Styles.cardContainer}>
              <div className={Styles.postInfo}>
                <p>Admin</p>
                <span className={Styles.postInfoSpan}></span>
                <p>Mar 22, 2024</p>
                <span className={Styles.postInfoSpan}></span>
                <p>1min read</p>
              </div>
              <div className={Styles.title}>
              Air raids across Syria
              </div>
              <div className={Styles.contentSummary}>
              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.
              </div>
              <div  className={Styles.imageContainer}>
                <Image
                src={image2}
                alt='Image'
                style={{width:'100%',height:'100%',objectFit:'cover'}}
                />
              </div>
              <div className={Styles.content}>
                
Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. 
              </div>
              <div className={Styles.highlights}>
                <div></div>
                <Divider orientation='vertical' sx={{borderWidth:2, borderColor:'blue'}}/>
              “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”
              </div>
                <Divider sx={{borderWidth:2}}/>
              <div className={Styles.icons}>
                <div>
                <Facebook/>
                <X/>
                <LinkedIn/>
                </div>
               
                <h4>News</h4>
              </div>
              <Divider sx={{borderWidth:2}}/>
              <div className={Styles.viewsAndCommentsAndLikes}>
                <div className={Styles.viewAndComment}>
                <p>0</p>
                <Visibility/>
                <p>0</p>
                <Comment/>
                </div>
                <div className={Styles.fav}>
                <p>5</p>
                  <Favorite sx={{color:'red'}}/>
                </div>
                

              </div>
            </div>
        </div>
    </div>
  )
}

export default page