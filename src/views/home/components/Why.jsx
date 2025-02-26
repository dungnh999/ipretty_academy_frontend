import React from 'react';
import Icon from 'academy/assets/Image/mortarboard.svg'

const Why = (props) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div>
                    <h2 className="text-2xl font-semibold capitalize">
                        TẠI SAO NÊN CHỌN
                        IPRETTY ACADEMY
                    </h2>
                    <p className="text-base text-subColor text-center">hình ảnh nổi bật</p>
                </div>
            </div>
            <div className="w-full bg-white rounded-lg flex gap-2 justify-between mr-3 ml-3">
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 "
                         src={Icon} alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Về cơ sở vật chất</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Chất lượng cao</span>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 "
                         src={Icon} alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Chuẩn Quốc Tế - Công nghệ
                        vượt trội</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">UY TÍN – DẪN ĐẦU</span>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 "
                         src={Icon} alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Đội ngũ giảng viên</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Giàu kinh nghiệmZ</span>
                </div>
            </div>
        </>
    );
};

export default Why;