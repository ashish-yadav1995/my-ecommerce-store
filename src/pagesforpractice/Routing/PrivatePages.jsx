// src/pages/PrivatePages.jsx
export const UserDetails = () => <h2>User Details (Private: Logged in users only)</h2>;

export const Product = () => <h2>Product Page (Private: Logged in users only)</h2>;

export const Dashboard = () => (
  <div style={{ backgroundColor: '#ffe6e6', padding: '20px' }}>
    <h2>Admin Dashboard (Strictly for Admin)</h2>
  </div>
);

export const Unauthorized = () => <h2 style={{ color: 'red' }}>Unauthorized: You don't have Admin access!</h2>;