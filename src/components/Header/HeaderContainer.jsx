import React from 'react';

import Header from './Header';

const HeaderContainer = () => {
    const [isActive, setIsActive] = React.useState(false);
    const show = () => {
        if (window.pageYOffset >= 50) {
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }
    window.addEventListener('scroll', show)

    return (
        <Header isActive={isActive} />
    )
}
export default HeaderContainer
