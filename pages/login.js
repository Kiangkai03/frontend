import React from "react";
import Head from 'next/head'
import Link from 'next/link';
import Axios from 'axios';
import { uesStare } from 'react'

const login = () => {
  return (
<body class="hold-transition login-page">
      
    <div className="login-box">
  <div className="login-logo">
    <a href="#"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
            <i class="fas fa-at"></i>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
            <i class="fas fa-user-lock"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-outline-success">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" className="btn btn-outline-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        
        <a href="forgot-password.html">ลืมรหัสผ่าน</a>
      </p>
      <p className="mb-0">

        <Link href='register'>
         <a className="text-center"> สมัครสมาชิก</a>
       </Link> 
      </p>
    </div>
  </div>
</div>
</body>
  );
};
export default login;
