import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'Private Limited Company Registration | Stanford Capital',
  description: 'Register your Private Limited Company in India online. Fast approval, lowest fees.',
}

export default function PrivateLimitedPage() {
  return (
    <ServicePage 
      title="Private Limited Company Registration" 
      subtitle="The most popular legal structure for businesses in India. Ideal for startups and growing companies."
    >
      <h2>Overview</h2>
      <p>
        A Private Limited Company is the most popular form of business entity in India. It is governed by the Companies Act, 2013, and requires a minimum of two directors and two shareholders.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Limited Liability:</strong> The personal assets of shareholders are protected.</li>
        <li><strong>Separate Legal Entity:</strong> The company is a distinct legal entity separate from its owners.</li>
        <li><strong>Fundraising:</strong> Easier to raise funds from VCs and angel investors.</li>
        <li><strong>Perpetual Succession:</strong> The company continues to exist even if the owners change.</li>
      </ul>

      <h2>Documents Required</h2>
      <ul>
        <li>PAN Card of Directors/Shareholders</li>
        <li>Aadhaar Card / Voter ID / Passport</li>
        <li>Passport sized photographs</li>
        <li>Bank Statement / Electricity Bill (Residence Proof)</li>
        <li>Office Address Proof (Rent Agreement + electricity bill)</li>
      </ul>

      <h2>Process</h2>
      <p>
        The process involves obtaining Digital Signature Certificates (DSC), reserving the company name (RUN), and filing the SPICe+ form for incorporation, PAN, and TAN.
      </p>
    </ServicePage>
  )
}
