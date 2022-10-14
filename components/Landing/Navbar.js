import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.png'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href='/main'>
          <Image 
          src={Logo}
          />
          </Link>
        </div>
        <Link href="/dashboard">
        <div className={styles.connectBut}>
          <span>Connect</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar