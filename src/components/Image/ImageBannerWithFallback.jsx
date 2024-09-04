import React from 'react';
import ErrorImage from 'academy/assets/Image/error-default.png'
const ImageBannerWithFallback = (props) => {
    const handleError = (e) => {
        e.target.src = ErrorImage;
    };

    return <img className={props.className} src={props.src} alt={props.alt} onError={handleError} />;
};

export default ImageBannerWithFallback;