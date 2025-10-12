import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="w-16 h-16 border-4 border-edu-primary border-solid rounded-full animate-spin border-t-transparent"
                style={{ borderColor: 'rgba(46, 51, 125, 0.2)', borderTopColor: '#276da7ff' }}
            ></div>
        </div>
    );
};

export default Loader;
