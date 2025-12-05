export const metadata = {
  title: 'Privacy Policy | Stanford Capital',
}

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Privacy Policy</h1>
      
      <div style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '1rem' }}>
          At Stanford Capital, accessible from stanfordcapital.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Stanford Capital and how we use it.
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem', color: 'var(--primary-color)' }}>Information We Collect</h2>
        <p style={{ marginBottom: '1rem' }}>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem', color: 'var(--primary-color)' }}>How we use your information</h2>
        <p style={{ marginBottom: '1rem' }}>
          We use the information we collect in various ways, including to:
        </p>
        <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you to provide updates and other information relating to the website</li>
        </ul>
      </div>
    </div>
  )
}
