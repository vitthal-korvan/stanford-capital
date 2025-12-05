import styles from './admin.module.css'

// Mock Data
const LEADS = [
  { id: 1, name: 'John Doe', email: 'john@example.com', service: 'Private Limited', status: 'New', date: '2023-10-27' },
  { id: 2, name: 'Jane Smith', email: 'jane@test.com', service: 'Trademark', status: 'Contacted', date: '2023-10-26' },
  { id: 3, name: 'Acme Corp', email: 'info@acme.com', service: 'Compliance', status: 'Converted', date: '2023-10-25' },
]

export default function AdminPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
        <button className={styles.logoutBtn}>Logout</button>
      </header>
      
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Total Leads</h3>
          <p>128</p>
        </div>
        <div className={styles.statCard}>
          <h3>Pending</h3>
          <p>12</p>
        </div>
        <div className={styles.statCard}>
          <h3>Converted</h3>
          <p>45</p>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Service</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.date}</td>
                <td>
                  <div className={styles.leadName}>{lead.name}</div>
                  <div className={styles.leadEmail}>{lead.email}</div>
                </td>
                <td>{lead.service}</td>
                <td>
                  <span className={`${styles.badge} ${styles[lead.status.toLowerCase()]}`}>
                    {lead.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
