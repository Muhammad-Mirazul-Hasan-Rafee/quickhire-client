import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';

const MyApplications = () => {
    const {user} = UseAuth();
    const [appliedJobs , setAppliedJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data =>
             setAppliedJobs(data),
            
            )
    },[user.email]);

    return (
        <div className='mx-8 mt-4'>

            <h4 className='text-3xl text-shadow-black font-bold'>Total applied jobs: {appliedJobs.length}</h4>
            
        </div>
    );
};

export default MyApplications;