// src/pages/AuthPages.jsx
import { useAuth } from './AuthContext';

export const Login = () => {
  const { login } = useAuth();
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login Page</h2>
      <button onClick={() => login('user')}>Login as User</button>
      <button onClick={() => login('admin')} style={{ marginLeft: '10px' }}>Login as Admin</button>
    </div>
  );
};

export const Register = () => <h2>Register Page</h2>;

export const About = () => <h2>About Page (Everyone can see this)</h2>;