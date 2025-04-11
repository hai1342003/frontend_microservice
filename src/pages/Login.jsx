import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'
// import { dangNhap } from '../api/auth'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    
    event.preventDefault();
    
    try {


      if (currentState === 'Sign Up') {

        const response = await axios.post(backendUrl + '/auth/signup', {username, email, password})
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);

        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/auth/login', {username, password})
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);

        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {

      navigate('/');
    }

  },[token])
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();


  //   if (currentState === 'Login') {
  //     try {
  //       const data = await dangNhap(email, password);
  //       console.log('Đăng nhập thành công:', data);

  //       localStorage.setItem('token', data.token);
        

  //       alert('Đăng nhập thành công!');
  //     } catch (err) {


  //       console.error('Lỗi đăng nhập:', err);
        


  //       alert('Sai tài khoản hoặc mật khẩu!');
  //     }
  // } else {
  //   alert('Chức năng đăng ký chưa được hỗ trợ!')
  // }

  return (

  
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>}
      <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Username' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState}</button>
    </form>
  )
}
export default Login