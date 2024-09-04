import React, {useState,useRef} from 'react';
import CourseService from "academy/service/CourseService";
import ReactPlayer from "react-player";
import LessonService from "academy/service/LessonService";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import ModalFastForwarding from "academy/views/learn/components/ModalFastForwarding";

const VideoPlayer = (props) => {
    let playerRef = useRef(null);
    const [lastTime, setLastTime] = useState(0);
    const [isFastForwarding, setIsFastForwarding] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const {dataCourse} = useDetailCourseContext();
    const {course, dataLessonById} = dataCourse;
    const [seekBackTime, setSeekBackTime] = useState(null);


    const handleProgress = (state) => {
        const currentTime = state.playedSeconds;
        const timeDifference = currentTime - lastTime;
        // Giới hạn tua nhanh (ví dụ: 2 giây)
        const fastForwardThreshold = 2;
        if (timeDifference > fastForwardThreshold) {
            setIsFastForwarding(true);
            setSeekBackTime(true);
            setIsPlaying(true);
        }
        setLastTime(currentTime);
    };

    const onEnded = () => {
        if (!dataLessonById.isPassed) {
            updateProcessLesson();
        }
    };

    const handleSeek = () => {
        if (playerRef.current && seekBackTime !== null) {
            playerRef.current.seekTo(seekBackTime);
            setSeekBackTime(null);
            setIsFastForwarding(false);
        }
    };


    const updateProcessLesson = () => {
        const data = new FormData()
        data.append('course_id', course.course_id)
        data.append('lesson_id', dataLessonById.id)
        data.append('view_duration', dataLessonById.lesson_duration)
        LessonService.updateProcessLesson(data,
            (res) => {
                if (res.data && res.data.data && res.data.data.lesson_id) {
                    const dataCheckLesson = res.data.data
                    console.log(dataCheckLesson);
                    // updateLessonLearned({ chapterIndex, chapterItemIndex, dataCheckLesson })
                    // if (dataCheckLesson.isCompletedCourse && !dataCheckLesson.isConfirmNotice) {
                    //     finishLesson(dataCheckLesson.course_name);
                    // }
                }
            },
            (err) => {
                console.log(err)
            }
        )
    };

    return(
        <>
            <div className='video-player'>
                <div
                    className='bg-black flex w-full text-white min-h-[40rem] max-h-heightVideo h-[100vh] overflow-hidden relative'>
                    <ReactPlayer
                        ref={playerRef}
                        controls={true}
                        url={"https://www.youtube.com/watch?v=" + dataLessonById['main_attachment']}
                        width='100%'
                        height='100%'
                        playing={true}
                        onEnded={onEnded}
                        onPause={console.log('dừng lại r')}
                        onProgress={handleProgress}
                        onPlay={() => console.log('Video is playing')}
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        playsinline
                        onError={(error) => console.error('Error occurred:', error)}
                    >
                    </ReactPlayer>
                </div>
            </div>
            <ModalFastForwarding
                isFastForwarding={isFastForwarding}
                handleSeek={handleSeek}
            />
        </>

    );
};

export default VideoPlayer;