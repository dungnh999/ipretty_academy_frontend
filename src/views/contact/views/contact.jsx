import React from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";

const Contact = (props) => {
    return(
        <div>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto">
                <div className='mt-[3.75rem] flex gap-[1.88rem]'>
                    <div className='max-w-[35%] flex flex-col gap-[1rem]'>
                        <h1 className='text-2xl font-semibold'>Đường dây nóng ? </h1>
                        <p className='text-base font-normal'>Anh chị cần hỗ trợ xin vui lòng liên hệ hoặc gửi mail ||</p>
                        <div className='flex flex-col gap-[1rem]'>
                            <div className='items-contact flex items-center gap-[1.5rem]'>
                                <div className='w-[3.5rem] h-[3.5rem] bg-bgGray rounded-lg'>
                                    <span className="material-symbols-outlined w-full h-full justify-center items-center flex text-primaryColor">call</span>
                                </div>
                                <div>
                                    <div className='text-base font-normal'>Số điện thoại</div>
                                    <div className='text-sm font-semibold'>028.7102.6899 - 0906991748 (Ms Nhi)</div>
                                </div>
                            </div>
                            <div className='items-contact flex items-center gap-[1.5rem]'>
                                <div className='w-[3.5rem] h-[3.5rem] bg-bgGray rounded-lg'>
                                    <span className="material-symbols-outlined w-full h-full justify-center items-center flex text-primaryColor">Mail</span>
                                </div>
                                <div>
                                    <div className='text-base font-normal'>Mail</div>
                                    <div className='text-sm font-semibold'>info@ipretty.vn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='bg-black h-[28.125rem] rounded-xl'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.852044079848!2d106.68201426962132!3d10.780016999335563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f314324e4d3%3A0xc97b174b75f1ebdf!2zQ8O0bmcgVHkgWE5LIEN14buZYyBT4buRbmcgVMawxqFpIMSQ4bq5cCAtIElwcmV0dHk!5e0!3m2!1svi!2s!4v1733717021111!5m2!1svi!2s"
                                style={{ border: "0" }}
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full overflow-hidden rounded-xl"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className='mt-[3.75rem]'>
                    <div>
                        <h1 className='text-xl font-semibold mb-[1.25rem]'>Liên hệ với chúng tôi</h1>
                        {/*<p className='font-normal text-base text-subColor'>Your email address will not be published. Required fields are marked *</p>*/}
                        <div className='form-comment mt-[1.88rem]'>
                            <form className='flex flex-col gap-[1.25rem]'>
                                <div className="grid gap-6 mb-5 md:grid-cols-2">
                                    <div>
                                        <input type="text" id="first_name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:placeholder-gray-400"
                                               placeholder="Họ và tên*" required/>
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
                                          placeholder="Câu hỏi">
                                </textarea>
                                </div>
                                {/*<div className="flex items-center mb-4">*/}
                                {/*    <input id="default-checkbox" type="checkbox" value=""*/}
                                {/*           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />*/}
                                {/*    <label htmlFor="default-checkbox"*/}
                                {/*           className="ms-2 text-sm font-normal text-base text-subColor">*/}
                                {/*        Save my name, email in this brower for the next time I comment*/}
                                {/*    </label>*/}
                                {/*</div>*/}
                                <button type="button"
                                        className="text-white bg-primaryColor hover:bg-primaryColor-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-[1.5rem] w-max py-[0.6rem] me-2 mb-2 focus:outline-none">
                                    Gửi ngay
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