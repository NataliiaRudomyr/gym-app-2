import React from 'react';

import Main from './Main/Main';
import Choose from './Choose/Choose';
import Registration from './Registration/Registration';
import Price from './Price/Price';

function Home() {
    return (
        <div>
            <Main />
            <Choose />
            <Registration />
            <Price />
        </div>
    )
}

export default Home;
