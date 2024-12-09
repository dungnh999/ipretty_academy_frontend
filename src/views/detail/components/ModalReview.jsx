import React, {useState, useEffect} from 'react';
import ReactPlayer from "react-player";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import ModalTemplate from "academy/components/Modal/ModalTemplate";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import {convertToMinutesAndSeconds} from "academy/helpers/utils";

const ModalReview = ({ modalIsOpen, closeModal, lesson}) => {
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const {dataCourse} = useDetailCourseContext();
    const demoLessons = dataCourse['listChapterLesson'].flatMap(chapter => 
        chapter.lessons.filter(lesson => lesson.is_demo === 1)
    );    

    console.log(dataCourse);
    
    useEffect(() => {
        if (modalIsOpen && demoLessons.length > 0 && lesson === '') {
            console.log(0);
          setCurrentVideoUrl(`https://www.youtube.com/watch?v=${demoLessons[0].main_attachment}`);
        }else{
            console.log(1);
            setCurrentVideoUrl(`https://www.youtube.com/watch?v=${lesson}`);
        }
    }, [modalIsOpen, lesson]);
        

    const handleClickVideo = (videoId) => {
        setCurrentVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
    };


    return(
        <ModalTemplate
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            titleHeader='Học thử'
            close={closeModal}
            footerContent=''
            isFooter='true'
        >
            <div className='video-preview relative h-[300px] sticky top-0 mb-6 rounded-3xl z-40	'>
                <ReactPlayer
                    url={currentVideoUrl}
                    controls={true}
                    width='100%'
                    height='100%'
                    playing={true}
                />
                <div className='text-xl py-3 bg-white font-medium'>
                    Danh sách video học thử
                </div>
            </div>
            <div className='list-course-review pt-8'>
                {demoLessons.map((item, key)  => (
                    <div className='item-course-review flex items-center gap-[16px] px-[24px] py-[16px] hover:bg-bgGray cursor-pointer' onClick={() => handleClickVideo(item['main_attachment'])}>
                        <ImageBannerWithFallback className='h-[46px] w-[74px] rounded' src={'https://img.youtube.com/vi/'+ item['main_attachment'] +  '/hqdefault.jpg'}/>
                        <div className='text-black font-semibold flex-1'>{ item['lesson_name'] }</div>
                        <span className="leading-none text-sm font-normal">{convertToMinutesAndSeconds(item['timer'])}</span>
                    </div>
                ))}
            </div>
        </ModalTemplate>
    );
};

export default ModalReview;