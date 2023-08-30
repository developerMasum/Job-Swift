import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../Dashboard/Sidebar';
import FindCandidatesNav from '../FindCandidates/FindCandidatesNav';

const FindCandidatesLayout = () => {
    return (
        <div>
            <FindCandidatesNav></FindCandidatesNav>
            <Outlet></Outlet>
        </div>
    );
};

export default FindCandidatesLayout;