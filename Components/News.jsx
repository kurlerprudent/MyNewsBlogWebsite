import Link from 'next/link'
import Styles from './News.module.css'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className={Styles.container}>
        <div>
        <h3 className={Styles.news}>News</h3>
        </div>
        
        <div className={Styles.newsSection}>

            <Link href='/news'><NewsCard/></Link>
            <Link href='/news'><NewsCard/></Link>
            <Link href='/news'><NewsCard/></Link>
            <Link href='/news'><NewsCard/></Link>
            <Link href='/news'><NewsCard/></Link>
            <Link href='/news'><NewsCard/></Link>
         
        </div>
   </div>
  )
}

export default News