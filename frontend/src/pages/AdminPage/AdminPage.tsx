import React, { useState } from 'react';
import Header from '@/components/common/Header/Header';
import { PageContainer } from '@/styles/PageContainer.styles';
import SideBar from '@/pages/AdminPage/components/SideBar/SideBar';

const AdminPage = () => {

    return (
        <>
            <PageContainer>
                <SideBar />
            </PageContainer>
        </>
    );
};

export default AdminPage;
