import React from 'react';
import skill from 'academy/assets/skill/skill'
const Skill = (props) => {
    return (
        <div className="flex gap-[7.81rem] items-center">
            <div >
                <img src={skill} className="h-full"/>
            </div>
            <div>
                <h2 className="text-2xl font-semibold capitalize">
                    Grow us your skill
                    with LearnPress LMS
                </h2>
                <p className="pt-[1.5rem] font-normal text-subColor">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                </p>
                <ul className='flex flex-col gap-[0.75rem] mt-[1rem]'>
                    <li className="flex items-center gap-[0.5rem]">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                    <li className="flex items-center gap-[0.5rem]">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                    <li className="flex items-center gap-[0.5rem]">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                    <li className="flex items-center gap-[0.5rem]">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                </ul>
                <button className="mt-[1.25rem] px-[1.5rem] py-[0.62rem] bg-primaryColor rounded-full text-white font-normal text-base hover:shadow-xl">Explorer course</button>
            </div>
        </div>
    )
};

export default Skill;