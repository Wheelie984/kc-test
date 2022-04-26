import React from 'react';
import './app-logo.scss';

// Graphics
import LogoImage from '../../../assets/images/logo.svg';

export interface BaseLogoProps {
    style?: React.CSSProperties;
}

const BaseLogo: React.FC<BaseLogoProps> = ({ style }) => {
    return (
        <div className="baseLogo">
            <img className="baseLogo__img" src={LogoImage} alt="app logo" style={style} />
        </div>
    );
};

export default BaseLogo;
