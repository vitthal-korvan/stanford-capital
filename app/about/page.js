import styles from './about.module.css'

export const metadata = {
  title: 'About Us | Stanford Capital',
  description: 'Learn more about Stanford Capital, our mission, and our team of corporate service experts.',
}

export default function AboutPage() {
  return (
    <div className="container">
      <div className={styles.section}>
        <h1 className={styles.title}>About Stanford Capital</h1>
        <p className={styles.lead}>
          We are India's leading corporate services platform, dedicated to helping entrepreneurs start, protect, manage, and grow their businesses.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
             <h3>Our Mission</h3>
             <p>To simplify legal and regulatory compliance for Indian businesses through technology and expertise.</p>
          </div>
          <div className={styles.card}>
             <h3>Our Vision</h3>
             <p>To be the partner of choice for every entrepreneur in their journey from ideation to IPO.</p>
          </div>
        </div>

        <h2 className={styles.subtitle}>Why Choose Us?</h2>
        <ul className={styles.list}>
          <li><strong>Expertise:</strong> A team of Chartered Accountants, Company Secretaries, and Lawyers.</li>
          <li><strong>Technology:</strong> Seamless online processes with real-time tracking.</li>
          <li><strong>Transparency:</strong> No hidden costs. What you see is what you pay.</li>
          <li><strong>Support:</strong> Dedicated account managers for personalized assistance.</li>
        </ul>
      </div>
    </div>
  )
}
