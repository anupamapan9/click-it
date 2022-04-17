import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center space-x-2">
            <div class="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;