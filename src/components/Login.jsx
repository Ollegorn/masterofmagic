import { useState } from 'react';
import { useUser } from '../hooks/useUser';
import Header from './Header';

function Login({ onSignupClick, onButtonClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your fetch logic remains the same

      if (response.ok) {
        // Your success logic remains the same

        setLoginMessage('Login successful! Redirecting...');
        setTimeout(() => {
          setLoginMessage('');
          window.location.href = '/';
        }, 1000);
      } else {
        setLoginMessage('Login failed. Please check your credentials.');
        console.error('Login failed');
      }
    } catch (error) {
      setLoginMessage('Error during login. Please try again.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex min-w-72 max-w-180 p-6 gap-6 flex-col items-center rounded-3xl bg-opacity-0">
      <div className='flex p-0 flex-col items-start gap-6 self-stretch rounded-none'>

      </div>
    </div>
  );
  
}

export default Login;
