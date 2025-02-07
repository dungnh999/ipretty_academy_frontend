import React from 'react';
import image1 from  "academy/assets/Image/demo/Service/363801687_671585455008206_3183860524583184532_n.jpg"
import image2 from  "academy/assets/Image/demo/Service/381695078_703334345166650_399911273747400275_n.jpg"
import image3 from  "academy/assets/Image/demo/Service/381211430_703334315166653_7741029730745583830_n.jpg"
import image4 from  "academy/assets/Image/demo/Service/385257719_709002674599817_8319861454022285770_n.jpg"
import image5 from  "academy/assets/Image/demo/Service/385309864_710652331101518_5151816011605414488_n.jpg"
import image6 from  "academy/assets/Image/demo/Service/385310543_710652334434851_8014418471350573323_n.jpg"
import image7 from  "academy/assets/Image/demo/Service/385334952_710152231151528_6601293539519568883_n.jpg"
import image8 from  "academy/assets/Image/demo/Service/386355066_710652301101521_3286164547170740527_n.jpg"
import image9 from  "academy/assets/Image/demo/Service/386756550_710652371101514_3148616082257587954_n.jpg"

const Service = (props) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold capitalize">Dịch vụ trải nghiệm</h2>
                    <p className="text-base text-subColor">hình ảnh nổi bật</p>
                </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image2} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image3} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image4} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image5} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image6} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image7} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image8} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image1} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src={image1} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
};

export default Service;