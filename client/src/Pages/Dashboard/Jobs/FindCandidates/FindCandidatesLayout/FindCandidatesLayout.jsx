import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Sidebar from '../../../Dashboard/Sidebar';
import FindCandidatesNav from '../FindCandidates/FindCandidatesNav';

const FindCandidatesLayout = () => {
    const{ id} = useParams()
 
    return (
        <div>
            <FindCandidatesNav id ={id}></FindCandidatesNav>
            <div className='md:px-8 px-2'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default FindCandidatesLayout;