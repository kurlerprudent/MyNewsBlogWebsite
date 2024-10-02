import Link from 'next/link'
import Styles from './News.module.css'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.news} ><h3>News</h3></div>
      <div className={Styles.newsContainer}>
        <NewsCard/>
        
      </div>
    </div>
  )
}

export default News