"use client"

import { Menu } from 'lucide-react'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            Stanford Capital
          </Link>
        </div>

        <ul className={styles.links}>
          <li><Link href="/start" className={styles.link}>Start</Link></li>
          <li><Link href="/protect" className={styles.link}>Protect</Link></li>
          <li><Link href="/manage" className={styles.link}>Manage</Link></li>
          <li><Link href="/grow" className={styles.link}>Grow</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-primary">
            Get Quote
          </Link>
          <button className={styles.mobileToggle} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}
