import QuoteForm from '@/components/features/quote-form'
import Button from '@/components/ui/button'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Empower Your Business in India</h1>
              <p>
                From incorporating your company to protecting your IP and managing compliance. 
                We provide end-to-end corporate services to help you grow.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/start/pvt-ltd"><Button>Start a Business</Button></Link>
                <Link href="/contact"><Button variant="outline">Contact Us</Button></Link>
              </div>
            </div>
            
            <div className={styles.formWrapper}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.grid}>
            <Link href="/start/pvt-ltd">
              <div className={styles.serviceCard}>
                <h3>Start</h3>
                <p>Incorporation, Registrations, and Setup</p>
              </div>
            </Link>
            <Link href="/protect/trademark">
              <div className={styles.serviceCard}>
                <h3>Protect</h3>
                <p>Trademark, Copyright, and IP Services</p>
              </div>
            </Link>
            <Link href="/manage/compliance">
              <div className={styles.serviceCard}>
                <h3>Manage</h3>
                <p>Annual Compliance, ROC Filings</p>
              </div>
            </Link>
            <Link href="/grow/gst">
              <div className={styles.serviceCard}>
                <h3>Grow</h3>
                <p>GST, ISO Certification, Funding</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
