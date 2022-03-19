import styles from '../styles/style.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'
import {useEffect, useState} from 'react'

function Nav() {
  const router = useRouter()

  useEffect(() => {
    
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)
    
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <nav>
        <ul className={styles.menu}>
          <li className={router.route=="/"?styles.active:''}>
            <Link className={styles.active} href="/">Home</Link>
          </li>
          <li className={router.route=="/about"? styles.active:''}>
            <Link href="/about">About</Link>
          </li>
          <li className={router.route=="/blog" || router.route=="/blog/[id]"?styles.active:""}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={router.route=="/contact"?styles.active:""}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
  
export default Nav