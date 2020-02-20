import React from 'react';

import './Preloader.sass';

const Preloader = () => (
    <div className="loader">
        <div className="loader__spinner">
            <div className="loader__spinner-square"  />
        </div>
    </div>
);

export default Preloader;
