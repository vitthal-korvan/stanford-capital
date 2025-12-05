import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'ROC Compliance & Filing | Stanford Capital',
  description: 'Annual ROC Compliance services for Private Limited Companies and LLPs. Avoid penalties and stay compliant.',
}

export default function CompliancePage() {
  return (
    <ServicePage 
      title="Annual Compliance (ROC)" 
      subtitle="Stay Compliant. Avoid heavy penalties and keep your company in good standing with the MCA."
    >
      <h2>Mandatory Compliances</h2>
      <p>
        Every Private Limited Company and LLP must file annual returns with the Registrar of Companies (ROC), regardless of turnover or profit. Non-compliance can lead to Director disqualification and fines.
      </p>

      <h2>What we cover</h2>
      <ul>
        <li><strong>AOC-4:</strong> Filing of Financial Statements (Balance Sheet, P&L).</li>
        <li><strong>MGT-7:</strong> Filing of Annual Return (Shareholding pattern, Director details).</li>
        <li><strong>DIR-3 KYC:</strong> Annual KYC for all Directors.</li>
        <li><strong>Auditor Appointment:</strong> Filing ADT-1 for auditor appointment.</li>
        <li><strong>Board Meetings:</strong> Drafting minutes of mandatory board meetings.</li>
      </ul>

      <h2>Due Dates</h2>
      <p>
        <strong>AOC-4:</strong> 30 days from AGM (Usually by Oct 30th).<br/>
        <strong>MGT-7:</strong> 60 days from AGM (Usually by Nov 29th).
      </p>
    </ServicePage>
  )
}
