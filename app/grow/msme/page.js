import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'MSME / Udyam Registration | Stanford Capital',
  description: 'Register as an MSME to avail government subsidies, lower interest rates, and protection against delayed payments.',
}

export default function MSMEPage() {
  return (
    <ServicePage 
      title="MSME / Udyam Registration" 
      subtitle="Unlock Government Benefits. Give your small business the boost it needs."
    >
      <h2>What is Udyam Registration?</h2>
      <p>
        Udyam Registration is the new process for registering MSME (Micro, Small and Medium Enterprises) launched by the Ministry of MSME. It is a fully online, paperless, and self-declaration based process.
      </p>

      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Collateral Free Loans:</strong> Access to credit under CGTMSE scheme.</li>
        <li><strong>Subsidy:</strong> 50% subsidy on Patent/Trademark registration fees.</li>
        <li><strong>Overdraft Interest Concession:</strong> 1% exemption on interest rate on overdraft.</li>
        <li><strong>Protection against delayed payments:</strong> Buyers must pay interest for delayed payments.</li>
        <li><strong>Tender Preferences:</strong> Exclusive access to certain government tenders.</li>
      </ul>

      <h2>Eligibility</h2>
      <p>
        Any manufacturing or service enterprise can register.
        <br/><strong>Micro:</strong> Investment &lt; ₹1 Cr, Turnover &lt; ₹5 Cr.
        <br/><strong>Small:</strong> Investment &lt; ₹10 Cr, Turnover &lt; ₹50 Cr.
      </p>
    </ServicePage>
  )
}
