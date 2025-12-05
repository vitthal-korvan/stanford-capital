import QuoteForm from './quote-form'
import styles from './service-page.module.css'

export default function ServicePage({ title, subtitle, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.body}>
          {children}
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.sticky}>
          <QuoteForm />
        </div>
      </div>
    </div>
  )
}
