import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'Trademark Registration | Stanford Capital',
  description: 'Protect your brand identity with Trademark Registration in India. Secure your logo, name, and tagline.',
}

export default function TrademarkPage() {
  return (
    <ServicePage 
      title="Trademark Registration" 
      subtitle="Secure your Brand. Your Name, Logo, and Tagline are your most valuable assets."
    >
      <h2>What is a Trademark?</h2>
      <p>
        A trademark is a unique symbol, word, or design that represents a company or product. Registering a trademark protects your brand from being used by others without permission.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Legal Protection:</strong> Exclusive right to use the mark nationwide.</li>
        <li><strong>Asset Creation:</strong> A registered trademark is an intangible asset that can be sold or franchised.</li>
        <li><strong>Trust & Goodwill:</strong> Builds customer confidence and brand recognition.</li>
        <li><strong>Global Validity:</strong> Can be used as a basis for international trademark registration.</li>
      </ul>

      <h2>Classes</h2>
      <p>
        Trademarks are categorized into 45 classes (Goods: 1-34, Services: 35-45). We help you identify the correct class for your business to ensure complete protection.
      </p>

      <h2>Process</h2>
      <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li><strong>Search:</strong> We conduct a thorough search to ensure your mark is unique.</li>
        <li><strong>Application:</strong> Filing the TM-A form with the Trademark Registry.</li>
        <li><strong>Examination:</strong> Addressing any objections raised by the examiner.</li>
        <li><strong>Publication:</strong> Published in the Trademark Journal for 4 months.</li>
        <li><strong>Registration:</strong> Issuance of the Trademark Registration Certificate.</li>
      </ol>
    </ServicePage>
  )
}
