import React from 'react';
import {handleDefaultImage} from "academy/helpers/defaultImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageBannerWithFallback = (props) => {
    return <LazyLoadImage className={props.className} wrapperClassName={props.wrapperClassName} effect="blur" width={props.width} height={props.height}  src={props.src} alt={props.alt} onError={handleDefaultImage}></LazyLoadImage>;
};

export default ImageBannerWithFallback;