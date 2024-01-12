import { useState } from 'react';
import { useUser } from '../hooks/useUser';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';

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
      // fetch logic

      if (response.ok) {
        // success
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
    <div className="flex min-w-72 w-96 max-w-180 p-6 gap-6 flex-col items-center rounded-3xl bg-opacity-0">
      <InputField icon="email" label="Email" placeholderText="user@email.com" />
      <InputField icon="lock" label="Password" placeholderText="●●●●●●●●" isPassword/>
      <div className="flex p-6 flex-col items-start self-stretch">
        <Button className="flex p-6 justify-center items-center self-stretch rounded">Log In</Button>
      </div>
      <div className='flex justify-center items-center self-center'>
        <button className="transition-transform duration-300 transform hover:translate-y-[-3px] hover:shadow-glow">
          Don't have an account? <span className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-body text-transparent">Sign Up</span>
        </button>
      </div>
    </div>
  );
  
}

export default Login;
