import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'LLP Registration | Stanford Capital',
  description: 'Register your Limited Liability Partnership (LLP) in India. Hybrid structure with benefits of both partnership and company.',
}

export default function LLPPage() {
  return (
    <ServicePage 
      title="Limited Liability Partnership (LLP)" 
      subtitle="A balanced business structure offering the benefits of limited liability and the flexibility of a partnership."
    >
      <h2>Overview</h2>
      <p>
        A Limited Liability Partnership (LLP) is a popular business vehicle in India, governed by the Limited Liability Partnership Act, 2008. It combines the flexibility of a traditional partnership with the limited liability protection of a company.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Limited Liability:</strong> Partners are not personally liable for the debts of the LLP.</li>
        <li><strong>Lower Compliance:</strong> Fewer compliance requirements compared to a Private Limited Company.</li>
        <li><strong>No Minimum Capital:</strong> Can be started with any amount of capital.</li>
        <li><strong>Tax Advantages:</strong> Exempt from Dividend Distribution Tax (DDT).</li>
      </ul>

      <h2>Documents Required</h2>
      <ul>
        <li>PAN Card of Partners</li>
        <li>Aadhaar Card / Voter ID / Passport of Partners</li>
        <li>Passport sized photographs</li>
        <li>Proof of Registered Office (Utility Bill + Rent Agreement/NOC)</li>
        <li>Digital Signature Certificate (DSC) for Designated Partners</li>
      </ul>

      <h2>Process</h2>
      <p>
        The process involves obtaining DSC, reserving the name (RUN-LLP), and filing the FiLLiP (Form for incorporation of Limited Liability Partnership).
      </p>
    </ServicePage>
  )
}
