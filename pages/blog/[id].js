import { useRouter, } from 'next/router';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

const Blogid = () => {
  const router = useRouter()
  const id = router.query.id
  
  const [post,setPost]=useState({})

  const loadPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    setPost(data);
  }
  
  useEffect(() => {
    id && loadPost()
  },[id])

    return (
      <>
        <Nav />
        {
          post.id && post.title ? (
          <div className="post">
            <h1>{post.id}. {post.title}</h1>
            <h4>{post.body}</h4>
          </div>) : (
            <h3 className='post'>Loading...</h3>    
          )
        }

        <style jsx>
          {`
            .post{
              padding:20px 50px;
            }  
          `}
        </style>
      </>
    )
  }
  
export default Blogid