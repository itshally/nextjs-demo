import styles from '../styles/Home.module.css'
import {server} from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log('articles', articles)
  return (
    <div className={styles.container}>
      <h1>Welcome to next js</h1>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }