import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../Dashboard/Sidebar';
import FindCandidatesNav from '../FindCandidates/FindCandidatesNav';

const FindCandidatesLayout = () => {
    return (
        <div>
            <FindCandidatesNav></FindCandidatesNav>
            <div className='md:px-8 px-2'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default FindCandidatesLayout;