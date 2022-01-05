import Nav from "../../components/Nav"
import Head from "next/head"
import styles from './blog.module.css'
import { useEffect,useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from "next/link"


export const getStaticProps =async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10")
  const data = await res.json()

  const getNumberOfPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
  const numberOfPosts = await getNumberOfPosts.json();
  
  return {
    props: {
      data,
      numberOfPosts,
    }
  }
}


const Blog = ({ data, numberOfPosts }) => {
  
  const [posts, setPosts] = useState(data)
  const [hasMore, setHasMore] = useState(true)
  
  const getMorePosts =async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${posts.length}&_limit=10`)
    const newPosts = await res.json()

    setTimeout(()=>setPosts([...posts, ...newPosts]),1000)
  }

  useEffect(() => {
    setHasMore(numberOfPosts.length > posts.length ? true : false)
  },[posts])

    return (
      <>
      <Head>
        <title>Blog Page</title>
      </Head>
      
        <Nav />
        
        <div className={styles.blogs}>
        <h1>Blog Page!</h1>
        
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePosts}
          loader={hasMore && <h3>Loading...</h3>}
          endMessage={<h3>End Here...</h3>}
          hasMore={true}
        >
        {
          posts.map((e) => (
              <Link href={`/blog/${e.id}`} key={e.id}>
                <div className={styles.post} key={e.id}>
                  <h3 className={styles.id} key={e.id+1}>{e.id}.</h3>
                  <h3 key={e.id+2}>{e.title}</h3>
                </div>
              </Link>
          ))
        }
        </InfiniteScroll>
        </div>
      </>
    )
  }
  
export default Blog
