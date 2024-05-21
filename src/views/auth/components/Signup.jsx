import React from 'react';

const Signup = (props) => {
    return (
        <div className='p-[1.88rem] border rounded-xl'>
            <h1 className='text-2xl text-black font-semibold mb-[1.88rem]'>Register</h1>
            <div className='flex gap-[1.25rem] flex-col'>
                <input type="text" id="first_name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-[1rem] py-[0.62rem] dark:placeholder-gray-400"
                       placeholder="Email*" required/>
                <input type="text" id="first_name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full px-[1rem] py-[0.62rem] dark:placeholder-gray-400"
                       placeholder="Username*" required/>
                <div className="relative w-full">
                    <input type="text" id="voice-search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-[1rem] py-[0.62rem]"
                           placeholder="Password*" required/>
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <g clip-path="url(#clip0_2480_4545)">
                                <path  d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#9D9D9D"/>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="relative w-full">
                    <input type="text" id="voice-search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-[1rem] py-[0.62rem]"
                           placeholder="Password*" required/>
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <g clip-path="url(#clip0_2480_4545)">
                                <path  d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#9D9D9D"/>
                            </g>
                        </svg>
                    </button>
                </div>
                <button className='w-full bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full text-base font-medium text-white'>Register</button>
            </div>
        </div>
    )
};

export default Signup;