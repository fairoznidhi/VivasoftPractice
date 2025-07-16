import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice';
import { jwtDecode } from 'jwt-decode';
import { useAppSelector } from '../app/hooks';
interface DecodedToken {
    user?: string;
}

const Logout = () => {
    const userToken=useAppSelector(selectUser);
    const dispatch=useDispatch();
    const decoded = userToken?.token ? jwtDecode<DecodedToken>(userToken.token) : null;
    const handleLogout=(e:any)=>{
        e.preventDefault();
        dispatch(logout())
    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h1 className='text-xl font-semibold mb-4'>Welcome <span className='text-purple-600 font-bold'>{decoded?.user}</span></h1>
        <button className='btn bg-black text-white hover:text-gray-200 w-32' onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout