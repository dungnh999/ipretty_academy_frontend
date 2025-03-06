import React, {useEffect, useState} from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import MediaService from "academy/service/MediaService";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";

const MediaView = (props) => {
    const [mediaData, setMediaData] = useState([]);
    const [page, setPage] = useState(1); // Lưu số trang hiện tại
    const [hasMore, setHasMore] = useState(true); // Kiểm tra còn dữ liệu không
    const limit = 10; // Số ảnh mỗi lần tải

    useEffect(() => {
        getMedia();
    },[page])

    function getMedia(){
        MediaService.getMedia(handleResponses, handlError, {
            page : page
        });
    }

    function handleResponses(res){
        if (res.data.data.data.length < limit) {
            setHasMore(false); // Nếu số ảnh trả về ít hơn limit => không còn ảnh để load
        }
        setMediaData((prev) => [...prev, ...res.data.data.data]); // Thêm ảnh mới vào danh sách cũ
    }

    function handlError(res){
        // setDataCourse(res.data.data);
    }

    console.log(mediaData);

    return (
        <div>
            <BreadCrumb/>
            <div className="pt-[3.75rem]">
                <div className="container max-w-screen-xl mx-auto gap-[3.75rem] flex flex-col">

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            mediaData.map((item, key) => (
                                <div>
                                    <ImageBannerWithFallback
                                        className="object-cover object-top w-full h-full aspect-[4/3] w-full aspect-[4/3] rounded-lg object-cover"
                                        src={item['original_url']}
                                        alt='Course Thumbnail'
                                    />
                                </div>
                            ))
                        }


                        {hasMore && (
                            <div className="text-center mt-4">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => setPage(page + 1)}
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaView;