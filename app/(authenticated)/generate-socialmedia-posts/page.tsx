import React from 'react';
import GenerateSocialMediaPostsComponent from './GenerateSocialMediaPostsComponent';

const GenerateSocialMediaPostsPage = () => {

    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <GenerateSocialMediaPostsComponent />
            </div>
        </div>
    )
};

export default GenerateSocialMediaPostsPage