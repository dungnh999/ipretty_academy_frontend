import React, {useState} from 'react';
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import { Card } from "flowbite-react";

const TabContent = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const {dataCourse} = useDetailCourseContext();
    const {courseInfo, dataLessonById} = dataCourse;
    const [noteData, setNoteData] = useState('');


    const tabs = [
        {
            name: 'Tổng quan',
            content: (dataLessonById['lesson_description']) ? dataLessonById['lesson_description'] : dataCourse['courseInfo']['description'],
        },
        {
            name: 'Ghi chú',
            content: (dataLessonById['lesson_description']) ? dataLessonById['lesson_description'] : dataCourse['courseInfo']['description'],
        },
        {
            name: 'Tài liệu',
            content: `
            <ul class="gap-3 flex">
                ${dataLessonById['lesson_document']
                ? dataLessonById['lesson_document'].map((item, key) => {
                    return `
                            <li class="group flex items-center justify-content-between gap-3 rounded-lg bg-white p-3 text-base font-bold text-gray-900">
                                <span> ${item.name} </span>
                                <a href="${item.url}" class="hover:text-primaryColor" target="_blank">
                                    <span class="material-symbols-outlined">
                                        download
                                    </span>
                                </a>
                            </li>
                        `;
                }).join('') // Kết hợp các phần tử thành một chuỗi HTML
                : '<li>Không có tài liệu</li>'
            }
            </ul>
        `,
        }
    ];



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