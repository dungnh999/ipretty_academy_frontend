import React from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useDetailCourseContext} from "academy/context/DetailCourseContext";

const Header = (props) => {
    const {dataCourse} = useDetailCourseContext();
    return (
        <div
            className='header flex fixed right-0 left-[475px] bg-borderGray p-0 transition-all border-b-borderButtonColor h-[70px]'>
            <div className='flex items-center justify-between px-[15px] h-full gap-5 w-full'>
                <h1 className='font-semibold text-base text-white text-center'>
                    <a href='#' className="">{dataCourse['courseInfo']['name']}</a>
                </h1>
                <div className='flex justify-center items-center gap-5 max-w-[30%] gap-4'>
                    <div className="flex gap-3 items-center">
                        <div className='w-[40px] h-[40px]'>
                            <CircularProgressbar
                                value={dataCourse['courseInfo']['percent_done']}
                                text={parseFloat(dataCourse['courseInfo']['percent_done']).toFixed() + '%'}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Text size
                                    textSize: '25px',
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',
                                    // Colors
                                    pathColor: '#147B65',
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <div className='text-sm	 text-white'>
                            Tiến độ
                        </div>
                    </div>
                    <button className='btn-link text-white text-sm	 flex gap-1 align-items-center'>
                        <span className="material-symbols-outlined mx-auto">draft</span>
                        <span> Ghi chú</span>
                    </button>
                    <button className='btn-link text-white text-sm	 flex gap-1 align-items-center'>
                        <span className="material-symbols-outlined mx-auto">question_exchange</span>
                        <span> Hướng dẫn</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Header;