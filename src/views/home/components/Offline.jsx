import React from 'react';
import {Link} from "react-router-dom";
import image1 from  "academy/assets/Image/demo/z6292962680498_ca4bc067965c1d472fbd37d820941ebc.jpg"
import image2 from  "academy/assets/Image/demo/z6292962719540_a68445ab774e84f7429e47df2524fb4b.jpg"
import image3 from  "academy/assets/Image/demo/z6292962680498_ca4bc067965c1d472fbd37d820941ebc.jpg"
import image4 from  "academy/assets/Image/demo/z6292962840125_07aaecfe39b3134ac2c7c16ed72af809.jpg"
import image5 from  "academy/assets/Image/demo/z6292962840131_271fad281ca3373e9fbd2a2eef12eb5e.jpg"
import image6 from  "academy/assets/Image/demo/z6292962840127_202dec09d1e733f2a916546c393917e9.jpg"
const Offline = (props) => {
    return (
       <>
           <div className="flex justify-between items-center">
               <div>
                   <h2 className="text-2xl font-semibold capitalize">Hình ảnh về buổi học offline</h2>
                   <p className="text-base text-subColor">hình ảnh nổi bật</p>
               </div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               <div>
                   <img className="h-auto max-w-full rounded-lg"
                        src={image1} alt=""/>
               </div>
               <div>
                   <img className="h-auto max-w-full rounded-lg"
                        src={image2} alt=""/>
               </div>
               <div>
                   <img className="h-auto max-w-full rounded-lg"
                        src={image3} alt=""/>
               </div>
               <div>
                   <img className="h-auto max-w-full rounded-lg"
                        src={image4} alt=""/>
               </div>
               <div>
                   <img className="h-auto max-w-full rounded-lg"
                        src={image6} alt=""/>
               </div>
               <div>
                   <img className="h-auto max-w-full rounded-lg"
                        src={image5} alt=""/>
               </div>
           </div>
       </>
    )
};

export default Offline;