import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginFrom] = useState(true)
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async () => {

    try {

      const res = await axios.post(BASE_URL + "/login", {
        emailId, password
      }, { withCredentials: true });

      dispatch(addUser(res.data));
      return navigate("/");

    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  }

  const handleSingUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", { firstName, lastName, emailId, password }, { withCredentials: true });


      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError("Something went wrong");
      // console.log(err.response.data)
    }
  }

  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? "Login" : "SignUp"}</h2>
          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input type="text" value={firstName} className="input input-bordered w-full max-w-xs" onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input type="text" value={lastName} className="input input-bordered w-full max-w-xs" onChange={(e) => setLastName(e.target.value)} />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input type="text" value={emailId} className="input input-bordered w-full max-w-xs" onChange={(e) => setEmailId(e.target.value)} />
            </label>
            <label className="form-control w-full max-w-xs py-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" value={password} className="input input-bordered w-full max-w-xs" onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <p className='text-red-500'>{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary m-2" onClick={isLoginForm ? handleLogin : handleSingUp}>{isLoginForm ? "Login" : "SignUp"}</button>
          </div>
          <p className='m-auto' onClick={() => setIsLoginFrom(value => !value)}>{isLoginForm ? (
            <>
              New User? <span className="text-primary cursor-pointer">SignUp here</span>
            </>
          ) : (
            <>
              Existing User? <span className="text-primary cursor-pointer ">Login here</span>
            </>
          )}</p>
        </div>
      </div>
    </div>
  )
}

export default Login
