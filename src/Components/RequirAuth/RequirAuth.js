import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequitAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center m-5'>
            <h3 className='text-danger'>Email is not verified</h3>
            <h5> Please Verify your email address</h5>
            <button className='btn btn-primary' onClick={async () => {
                    await sendEmailVerification();
                }}>Send Verification Email Again</button>
        </div>
    }

    return children;
};

export default RequitAuth;