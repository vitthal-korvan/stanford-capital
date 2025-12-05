import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'GST Registration | Stanford Capital',
  description: 'Get your GST number online. Mandatory for businesses with turnover > ₹20 Lakhs or inter-state trade.',
}

export default function GSTPage() {
  return (
    <ServicePage 
      title="GST Registration" 
      subtitle="One Nation, One Tax. Get your 15-digit GSTIN identification number hassle-free."
    >
      <h2>Who needs GST?</h2>
      <p>
        GST registration is mandatory if your aggregate annual turnover exceeds ₹20 Lakhs (₹10 Lakhs for North Eastern states) or if you are involved in inter-state supply of goods and services.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Legal Recognition:</strong> Chartered by the government as a registered supplier.</li>
        <li><strong>Input Tax Credit (ITC):</strong> Claim credit for taxes paid on purchases.</li>
        <li><strong>Inter-state Trade:</strong> Freely sell goods across state borders.</li>
        <li><strong>E-commerce:</strong> Mandatory for selling on platforms like Amazon and Flipkart.</li>
      </ul>

      <h2>Documents Required</h2>
      <ul>
        <li>PAN Card of Business/Proprietor</li>
        <li>Aadhaar Card of Promoter</li>
        <li>Business Address Proof (Electricity bill / Rent Agreement)</li>
        <li>Bank Account Statement / Cancelled Cheque</li>
        <li>Photograph of Owner/Partners</li>
      </ul>
    </ServicePage>
  )
}
