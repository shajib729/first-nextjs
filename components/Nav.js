import styles from '../styles/style.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Nav() {
  const router = useRouter()
    return (
      <>
        <nav>
          <ul className={styles.menu}>
            <li className={router.pathname=="/"?styles.active:""}>
              <Link className={styles.active} href="/">Home</Link>
            </li>
            <li className={router.pathname=="/about"? styles.active:""}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname=="/blog" || router.pathname=="/blog/[id]"?styles.active:""}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={router.pathname=="/contact"?styles.active:""}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
  
export default Nav