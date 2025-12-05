import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'One Person Company Registration | Stanford Capital',
  description: 'Register your OPC in India. The best option for solo entrepreneurs looking for limited liability.',
}

export default function OPCPage() {
  return (
    <ServicePage 
      title="One Person Company (OPC)" 
      subtitle="The perfect start for solo entrepreneurs. Enjoy full control with the benefits of limited liability."
    >
      <h2>Overview</h2>
      <p>
        A One Person Company (OPC) is a refined version of a sole proprietorship, introduced in the Companies Act, 2013. It allows a single entrepreneur to operate a corporate entity with limited liability protection.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Sole Ownership:</strong> 100% control over the business.</li>
        <li><strong>Limited Liability:</strong> Personal assets are protected, unlike a sole proprietorship.</li>
        <li><strong>Corporate Identity:</strong> Better brand image and trust compared to a proprietorship.</li>
        <li><strong>Easy Fundraising:</strong> Easier to convert to a Pvt Ltd company later for raising VC funds.</li>
      </ul>

      <h2>Documents Required</h2>
      <ul>
        <li>PAN Card of the Director/Nominee</li>
        <li>Aadhaar Card / Voter ID / Passport</li>
        <li>Passport sized photographs</li>
        <li>Bank Statement / Electricity Bill (Residence Proof)</li>
        <li>Office Address Proof (Rent Agreement + electricity bill)</li>
        <li>Nominee Consent Form (INC-3)</li>
      </ul>

      <h2>Process</h2>
      <p>
        Similar to a Private Limited Company, involving DSC, name reservation, and SPICe+ form filing. A nominee must be appointed in the MOA.
      </p>
    </ServicePage>
  )
}
