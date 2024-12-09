import React from 'react';
import background from "assets/add_on/background";

const AddOn = (props) => {
    return(
        <div
            className="rounded-lg"
            // style={{
            //     backgroundImage: `url(${background})`,
            //     backgroundSize: 'cover', // Đảm bảo hình nền bao phủ toàn bộ khu vực
            //     backgroundPosition: 'center', // Căn giữa hình nền
            //     backgroundRepeat: 'no-repeat' // Không lặp lại hình nền
            // }}
        >
            <img className="w-full" src='https://ipretty.vn/wp-content/uploads/signarute-2024.png'/>
        </div>

    )
};

export default AddOn;