import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>Stanford Capital</h3>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Empowering businesses to Start, Protect, Manage, and Grow. Your trusted partner in corporate services.
          </p>
        </div>
        
        <div className={styles.column}>
          <h3>Start</h3>
          <ul>
            <li><Link href="/start/pvt-ltd">Private Limited</Link></li>
            <li><Link href="/start/llp">LLP Registration</Link></li>
            <li><Link href="/start/one-person-company">One Person Company</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Protect & Manage</h3>
          <ul>
            <li><Link href="/protect/trademark">Trademark</Link></li>
            <li><Link href="/protect/copyright">Copyright</Link></li>
            <li><Link href="/manage/compliance">Annual Compliance</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Stanford Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
