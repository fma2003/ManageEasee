'use client'

import PropTypes from "prop-types";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utile/firebase/config'
import { useRouter } from 'next/navigation'

const Login = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Redirect to the index page
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <div
      className={`relative w-[400px] h-[598px] text-left text-29xl text-white font-k2d lg:w-[445px] sm:align-left sm:w-[1200px] md:left-2 ${className}`}
    >
      <img
        className="absolute top-[6px] left-[166px] w-24 h-[92px] overflow-hidden"
        loading="eager"
        alt=""
        src="/logobgblack-1.svg"
      />
      <h1 className="m-0 absolute top-[147px] left-[67px] text-inherit font-normal font-inherit inline-block w-[291px] h-[78px]">
        Login
      </h1>
      <input
        className="[outline:none] bg-black absolute top-[235px] left-[66px] rounded-xl box-border w-[328px] xs:w-[300px] h-[77px] border-[1px] border-solid border-white text-white text-5xl"
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="[outline:none] bg-black absolute top-[337px] left-[66px] rounded-xl box-border w-[328px] xs:w-[300px] h-[77px] border-[1px] border-solid border-white text-white text-5xl"
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[427px] left-[67px] text-2xl font-k2d text-skyblue text-left inline-block w-[249px] h-[23px]">
        <p className="m-0">Forgot your password?</p>
      </button>
      <p className="m-0 absolute top-[462px] left-[67px] text-2xl inline-block w-[140px] h-[19px]">
        Remember me
      </p>
      <div className="absolute top-[465px] left-[128px] w-9 h-8 overflow-hidden" />
      <button
        onClick={handleLogin}
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[538px] left-[67px] w-[325px] h-[52px] transform transition-transform duration-300 hover:scale-105 active:scale-95">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro" />
        <div className="absolute h-[65.38%] w-[38.86%] top-[17.31%] left-[36.34%] text-5xl font-semibold font-k2d text-black text-left inline-block">
          Continue
        </div>
      </button>
      <input
        className="m-0 absolute top-[469px] left-[200px] w-5 h-[17px]"
        type="checkbox"
      />
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
