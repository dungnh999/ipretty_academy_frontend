import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";

const Contact = (props) => {
    return(
        <div>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto">
                <div className='mt-[3.75rem] flex gap-[1.88rem]'>
                    <div className='max-w-[35%] flex flex-col gap-[1rem]'>
                        <h1 className='text-2xl font-semibold'>Need a direct line?</h1>
                        <p className='text-base font-normal'>Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                        <div className='flex flex-col gap-[1rem]'>
                            <div className='items-contact flex items-center gap-[1.5rem]'>
                                <div className='w-[3.5rem] h-[3.5rem] bg-bgGray rounded-lg'>
                                    <span className="material-symbols-outlined w-full h-full justify-center items-center flex text-primaryColor">call</span>
                                </div>
                                <div>
                                    <div className='text-base font-normal'>Phone</div>
                                    <div className='text-sm font-semibold'>(123) 456 7890</div>
                                </div>
                            </div>
                            <div className='items-contact flex items-center gap-[1.5rem]'>
                                <div className='w-[3.5rem] h-[3.5rem] bg-bgGray rounded-lg'>
                                    <span className="material-symbols-outlined w-full h-full justify-center items-center flex text-primaryColor">Mail</span>
                                </div>
                                <div>
                                    <div className='text-base font-normal'>Mail</div>
                                    <div className='text-sm font-semibold'>contact@thimpress.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='bg-black h-[28.125rem] rounded-xl'>
                            Maps
                        </div>
                    </div>
                </div>
                <div className='mt-[3.75rem]'>
                    <div>
                        <h1 className='text-xl font-semibold mb-[1.25rem]'>Contact us</h1>
                        <p className='font-normal text-base text-subColor'>Your email address will not be published. Required fields are marked *</p>
                        <div className='form-comment mt-[1.88rem]'>
                            <form className='flex flex-col gap-[1.25rem]'>
                                <div className="grid gap-6 mb-5 md:grid-cols-2">
                                    <div>
                                        <input type="text" id="first_name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:placeholder-gray-400"
                                               placeholder="Name*" required/>
                                    </div>
                                    <div>
                                        <input type="text" id="first_name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:placeholder-gray-400"
                                               placeholder="Email*" required/>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                <textarea id="message" rows="4"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Comment">
                                </textarea>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value=""
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox"
                                           className="ms-2 text-sm font-normal text-base text-subColor">
                                        Save my name, email in this brower for the next time I comment
                                    </label>
                                </div>
                                <button type="button"
                                        className="text-white bg-primaryColor hover:bg-primaryColor-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-[1.5rem] w-max py-[0.6rem] me-2 mb-2 focus:outline-none">
                                    Posts comment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;