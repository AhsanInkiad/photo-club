import React, { useContext } from 'react';
import './AUserHome.css';
import { AuthContext } from '../../../providers/AuthProvider';
const AUserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
       
            <div className='flex gap-60 items-center border-2 rounded-lg border-[#1E293B] p-24'>
                <div>
                    <div className=' rounded-full '>
                        <img className='dp  ' src={user.photoURL} alt="" />

                    </div>
                    <p className='text-[#1E293B] pt-4 font-bold text-lg'>Name: {user.displayName} </p>

                </div>
                <div className="wcards">
                    <div className="wcard wred">
                        <p className="wtip text-lg">Total Users: </p>
                        <p className="wsecond-text text-2xl font-bold"></p>
                    </div>
                    <div className="wcard wred">
                        <p className="wtip text-lg">Total Classes:</p>
                        <p className="wsecond-text text-2xl font-bold"></p>
                    </div>
                    <div className="wcard wblue">
                        <p className="wtip text-lg">Total Approved Classes:</p>
                        <p className="wsecond-text text-2xl font-bold"></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AUserHome;