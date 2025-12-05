import QuoteForm from '@/components/features/quote-form'

export const metadata = {
  title: 'Contact Us | Stanford Capital',
  description: 'Get in touch with us for any queries regarding company registration, trademark, or compliance.',
}

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>
        Contact Us
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Get in Touch</h2>
          <p style={{ marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Have questions? Our experts are here to help you with all your corporate service needs. Fill out the form or reach us at:
          </p>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <strong>Email:</strong><br/>
            <a href="mailto:support@stanfordcapital.in" style={{ color: 'var(--accent-color)' }}>support@stanfordcapital.in</a>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <strong>Phone:</strong><br/>
            <a href="tel:+919876543210" style={{ color: 'var(--accent-color)' }}>+91 9876 543 210</a>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <strong>Address:</strong><br/>
            <p style={{ color: 'var(--text-secondary)' }}>
              123, Business Park,<br/>
              Cyber City, Gurugram,<br/>
              Haryana - 122002
            </p>
          </div>
        </div>

        <div>
          <QuoteForm />
        </div>
      </div>
    </div>
  )
}
