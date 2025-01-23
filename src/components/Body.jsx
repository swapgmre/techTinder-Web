import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from "../utils/userSlice"

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.users)



  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", { withCredentials: true });

      dispatch(addUser(res.data));

    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      // for other errors we will redirect to page something went wrong
      console.error(err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
