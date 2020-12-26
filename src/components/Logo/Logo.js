import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
const Logo = () => {
    return (
        <div >
            <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> </div>
            </Tilt>
        </div>
    )
}
export default Logo;