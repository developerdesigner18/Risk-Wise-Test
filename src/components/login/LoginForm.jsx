import React from 'react'
import DropdownSimple from '../ui/SimpleDropDown'
import Button from '../ui/Button'
import { AiOutlineLogin } from "react-icons/ai";

const LoginForm = () => {
    const options = [
        { value: 'tg', label: 'Tarun Gupta' },
        { value: 'vd', label: 'Vikram Dodiya' },
        { value: 'aj', label: 'Abhy Joshi' },
      ];
  return (
    <div className="user-block customscroll">
            <div className="user-box padding-all-40">
              <div className="user-box-inner">
                <a href="#" className="logo gap-bottom-32">Risk Wise</a>
                <h4 className="fw-500 gap-bottom-5">Sign In</h4>
                <p>Welcome! Please signin to continue.</p>
                <div className="gap-top-32">
                  <div className="form-group gap-bottom-20">
                    <label className="label label-left">Email Address</label>
                    <div className="input-group">
                      <input type="email" className="input-textbox"/>
                    </div>
                  </div>
                  <div className="form-group gap-bottom-20">
                    <div className="d-flex between">
                      <label className="label label-left">Password</label>
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="input-group">
                      <input type="password" className="input-textbox"/>
                    </div>
                  </div>
                  <div className="form-group gap-bottom-20">
                    <DropdownSimple
                     label="DropDown Simple"
                     options={options}
                     placeholder="Search or Select..."
                    />
                  </div>
                  <p className="fs-xxs gap-bottom-20">By clicking <strong className="text-black">Sign In</strong> below, you agree to our Terms and Conditions and Privacy Policy.</p>
                  <div className="button-group button-group-left gap-bottom-15">
                    <Button 
                    className="btn-100 btn-primary gap-right-5"
                    >
                       Sign In
                    </Button>
                  </div>
                  <div className="divider text-center gap-bottom-20">
                    <span className="fs-xxs text-uppercase">or sign in with</span>
                  </div>
                  <div className="button-group button-group-equal  button-group-left gap-bottom-25">
                    <a href="#" className="btn btn-primary gap-right-5">
                      <i className="ri-links-line"></i>
                      Magic Link
                    </a>
                    <a href="#" className="btn btn-primary gap-right-5">
                      <i className="ri-phone-lock-line"></i>
                      OTP
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="gap-bottom-3">Don't have an account? <a href="#">Create an Account</a></p>
                    <p>Need assistance or have questions? <a href="#">Contact Support</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default LoginForm