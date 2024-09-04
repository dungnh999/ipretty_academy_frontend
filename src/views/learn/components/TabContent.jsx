import React, {useState} from 'react';
import {useDetailCourseContext} from "academy/context/DetailCourseContext";

const TabContent = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const {dataCourse} = useDetailCourseContext();
    const tabs = [
        {
            name: 'Tổng quan',
            content: dataCourse['courseInfo']['description'],
        }, {
            name: 'Ghi chú',
            content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                      LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                      No comments yet! You be the first to comment.`,
        },
        {
            name: 'Tài liệu',
            content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                      LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                      No comments yet! You be the first to comment.`,
        }
    ]

    return(
        <div className='tab-detail'>
            <div className="flex flex-col">
                {/* Tạo các tab */}
                <div
                    className="flex border-gray-200 overflow-hidden self-stretch rounded-t-xl border">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`py-[1.25rem] px-[1.88rem] text-base font-semibold flex-1 flex-shrink-0 basis-0 border-r last:border-r-0 ${
                                currentTab === index ? 'bg-bgGray text-primaryColor' : ''
                            }`}
                            onClick={() => setCurrentTab(index)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Hiển thị nội dung của tab hiện tại */}
                <div className="p-[1.88rem] bg-bgGray rounded-b-xl text-base"
                     dangerouslySetInnerHTML={{__html: tabs[currentTab].content}}></div>
            </div>
        </div>
    )
};

export default TabContent;