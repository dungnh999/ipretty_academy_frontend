import React from 'react';
import ReactPlayer from "react-player";
import VideoPlayer from "academy/views/learn/components/VideoPlayer";
import TabContent from "academy/views/learn/components/TabContent";

const Content = (props) => {
    return(
        <div className='content flex-1 overflow-auto relative mt-[70px]'>
            <div id="learn-content-item">
                <div className="content-item-scrollable">
                    <div className="max-w-full pb-[80px]">
                        <VideoPlayer/>
                        <TabContent/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;