import React from 'react';
import skill from 'academy/assets/skill/skill'
const Skill = (props) => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 flex gap-8 items-center">
            <div>
                <img src={skill} className="h-full" alt="Skill Illustration" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold capitalize">
                    Grow us your skill
                    with LearnPress LMS
                </h2>
                <p className="pt-6 font-normal text-subColor">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                </p>
                <ul className='flex flex-col gap-2 mt-4'>
                    <li className="flex items-center gap-2">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <i className="material-symbols-outlined text-primaryColor">
                            done
                        </i>
                        <p className="font-medium text-base text-black">Certification</p>
                    </li>
                </ul>
                <button className="mt-5 px-6 py-2 bg-primaryColor rounded-full text-white font-normal text-base hover:shadow-xl">Explore course</button>
            </div>
        </div>

    )
};

export default Skill;