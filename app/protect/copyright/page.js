import ServicePage from '@/components/features/service-page'

export const metadata = {
  title: 'Copyright Registration | Stanford Capital',
  description: 'Proect your creative works including software, books, music, and art with Copyright Registration.',
}

export default function CopyrightPage() {
  return (
    <ServicePage 
      title="Copyright Registration" 
      subtitle="Protect your creativity. Secure legal rights for your literary, artistic, and musical works."
    >
      <h2>Overview</h2>
      <p>
        Copyright is a legal right given to the creators of original works. It applies to literature, dramatic, musical, artistic works, and even software code.
      </p>

      <h2>Why Register?</h2>
      <ul>
        <li><strong>Legal Proof:</strong> Serves as prima facie evidence of ownership in legal disputes.</li>
        <li><strong>Control:</strong> Right to reproduce, distribute, and adapt the work.</li>
        <li><strong>Monetization:</strong> Earn royalties by licensing your work.</li>
        <li><strong>Lifetime Protection:</strong> Generally lasts for the lifetime of the author plus 60 years.</li>
      </ul>

      <h2>What can be Copyrighted?</h2>
      <ul>
        <li>Software Source Code & Algorithms</li>
        <li>Books, Articles, Blogs</li>
        <li>Music, Lyrics, Sound Recordings</li>
        <li>Paintings, Photographs, Designs</li>
        <li>Movies and Videos</li>
      </ul>

      <h2>Process</h2>
      <p>
        Filing an application with the Copyright Office, waiting for a mandatory 30-day objection period, and responding to any discrepancies before the final registration.
      </p>
    </ServicePage>
  )
}
