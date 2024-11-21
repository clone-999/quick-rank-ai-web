import AuthenticatedSidebar from '@/components/authenticated/AuthenticatedSidebar';
import React, { Suspense } from 'react';

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <main className="mx-auto w-full relative">
            <AuthenticatedSidebar>
                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </AuthenticatedSidebar>
        </main>
    );
};

export default AuthLayout
