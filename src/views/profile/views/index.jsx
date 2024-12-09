import React, {useEffect,useState } from 'react';
import BreadCrumb from "academy/components/UI/BreadCrumb";
import { Label, Textarea ,Datepicker, Badge, Avatar, Button, Tabs, Card, Progress } from "flowbite-react";
import { useLocation } from "react-router-dom";
import UsersService from "academy/service/UsersService";
import {toast} from "react-toastify";
import { HiUserCircle } from "react-icons/hi";
import {handleDefaultImage} from "academy/helpers/defaultImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";


const Profile = (props) => {
    const classNameLink = "group inline-flex items-center w-full px-4 py-3 rounded-lg bg-gray-50 hover:bg-primaryColor w-full hover:text-white aria-selected:bg-primaryColor aria-selected:text-white"
    const [storedValue, setStoredValue] = useState(null);
    const [selectedTab, setSelectedTab] = useState('dashboard');
    const [image, setImage] = useState(null); // Trạng thái lưu trữ ảnh được tải lên
    const [dataMyCourse, setDataMyCourse] = useState([]);
    const [dataProgressCourse, setDataProgressCourse] = useState([]);

    const [initialData, setInitialData] = useState({
        name: '',
        phone: '',
        email: '',
        birthday:  '',
        address: '',
    }); // Dữ liệu gốc từ API
    const location = useLocation(); // Lấy đường dẫn hiện tại
    const [formData, setFormData] = useState({
        name: (storedValue) ? storedValue.name : '',
        phone: (storedValue) ? storedValue.phone : '',
        email: (storedValue) ? storedValue.email : '',
        birthday: (storedValue) ? storedValue.birthday : '',
        address: (storedValue) ? storedValue.address : '',
    });

    useEffect(() => {
        const dataUser = localStorage.getItem("user");
        if (dataUser) {
            let data = JSON.parse(dataUser);
            setInitialData({
                name: data.name,
                phone: data.phone,
                email: data.email,
                birthday: data.birthday ? data.birthday : null, // Chuyển đổi sang Date
                address: data.address,
            });
            setStoredValue(data);
            setFormData({
                name: data.name,
                phone: data.phone,
                email: data.email,
                birthday: data.birthday ? data.birthday : null, // Chuyển đổi sang Date
                address: data.address,
            });

            setImage(data.avatar)
        }
        getMyCourse()
    }, []);

    console.log(dataProgressCourse);

    //UPLOAD AVATAR

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setImage(fileURL); // Cập nhật trạng thái với URL của ảnh mới
        }
        let formData = new FormData();
        formData.append('avatar', file);
        UsersService.updateAvatar(responesUploadSuccess, errorsUploadCb, formData)
    };

    const responesUploadSuccess = (res) => {
        toast.success('Cập nhật thành công');
        localStorage.setItem("user", JSON.stringify(res.data.data));
    }

    const errorsUploadCb = (e) => (
        console.log(e)
    )

    //GET MY COURSE

    const getMyCourse = (params) => {
        UsersService.myCourse(responesMyCourseSuccess, errorsMyCourseCb, params)
    }

    const responesMyCourseSuccess = (res) => {
        setDataMyCourse(res.data.data);
        const filteredByCategory = res.data.data.filter(course => course.student_result.percent_finish > 0);
        setDataProgressCourse(filteredByCategory);
    }

    const errorsMyCourseCb = (e) => {
        console.log(e)
    }


    const handleTabClick = (tabId) => {
        setSelectedTab(tabId);
    };


    // Kiểm tra có thay đổi thông tin không
    const isFormUnchanged = JSON.stringify(formData) === JSON.stringify(initialData);
    const handleUpdateProfile = () => {
        UsersService.updateProfile(responesSuccess,errorsCb, formData );
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            dateOfBirth: date,
        }));
    };

    const responesSuccess = (res) => {
        toast.success('Cập nhật thành công');
        localStorage.setItem("user", JSON.stringify(res.data.data));
    }

    const errorsCb = (e) => (
        console.log(e)
    )

    const handleChangeDataProfile = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    console.log(dataMyCourse);


    return (
        <div key={location.pathname}>
            <BreadCrumb/>
            <div className="container max-w-screen-xl mx-auto gap-[5.625rem] flex flex-col py-[60px]">
                <div className="row">
                    <main className="site-main col-sm-12 full-width">
                        <div className='title-profile'>
                            <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                Hồ sơ
                            </h1>
                        </div>
                        <div className='info-profile'>
                            <div className="content-profile flex items-center gap-5 py-[50px] justify-center">
                                <div className='left-avatar-profile'>
                                    <Avatar img={image} onError={handleDefaultImage} className="avatar h-auto w-full rounded-full" placeholderInitials="RR" size="xl" rounded  />
                                </div>
                                <div className='left-name-profile'>
                                    <h2 className="text-3xl font-extrabold text-center leading-non">{(storedValue) ? storedValue.name : '' }</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 flex-none lg:w-[27%] md:me-4 mb-4 md:mb-0"
                                id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                <li>
                                    <a href="javascript:void(0)" id="dashboard-tab" data-tabs-target="#dashboard"
                                       type="button" role="tab" aria-controls="dashboard"
                                       aria-selected={selectedTab === 'dashboard'}
                                       onClick={() => handleTabClick('dashboard')}
                                       className={classNameLink}>
                                        <svg
                                            className="w-4 h-4 me-2 text-gray-500 group-hover:text-white group-aria-selected:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 18 18">
                                            <path
                                                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                        </svg>
                                        Tổng quan
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" id="setting-tab" data-tabs-target="#setting"
                                       type="button" role="tab" aria-controls="setting"
                                       aria-selected={selectedTab === 'setting'}
                                       onClick={() => handleTabClick('setting')}
                                       className={classNameLink}>
                                        <svg
                                            className="w-4 h-4 me-2 text-gray-500 group-hover:text-white dark:text-gray-400 group-aria-selected:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                                        </svg>
                                        Thiết lập
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" id="order-tab" data-tabs-target="#order" type="button"
                                       role="tab" aria-controls="order"
                                       aria-selected={selectedTab === 'order'}
                                       onClick={() => handleTabClick('order')}
                                       className={classNameLink}>
                                        <svg
                                            className="w-4 h-4 me-2 text-gray-500 group-hover:text-white dark:text-gray-400 group-aria-selected:text-white"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                                            <path
                                                d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                                        </svg>
                                        Đơn hàng
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-flex items-center px-4 py-3 w-full text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
                                        <svg
                                            className="w-4 h-4 me-2 text-gray-400 group-hover:text-white dark:text-gray-500"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                                        </svg>
                                        Đăng xuất</a>
                                </li>
                            </ul>
                            <div id="default-tab-content" className="flex-1">
                                <div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab"
                                     className={(selectedTab === 'dashboard') ? 'text-medium text-gray-500 dark:text-gray-400 w-full rounded-lg' : 'text-medium text-gray-500 dark:text-gray-400 w-full rounded-lg hidden'}>
                                    <div className='dashboard'>
                                        <div className='statistic-box-row flex gap-5 flex-wrap'>
                                            <div
                                                className='item-box-dashboard w-[calc((100%-40px)/3)] p-[20px] bg-[#f7f7fb] flex rounded-[20px] gap-[20px]'>
                                                <div className='item-box-dashboard-icon'>
                                                    <span
                                                        className="material-symbols-outlined text-2xl w-[60px] h-[60px] rounded-full bg-sky-100 flex items-center justify-center">weather_hail</span>
                                                </div>
                                                <div className='item-box-dashboard-text flex-1'>
                                                    <label className='block'>Đã đăng ký</label>
                                                    <span className="item-box-dashboard-text-number text-xl">{dataMyCourse.length}</span>
                                                </div>
                                            </div>
                                            <div
                                                className='item-box-dashboard w-[calc((100%-40px)/3)] p-[20px] bg-[#f7f7fb] flex rounded-[20px] gap-[20px]'>
                                                <div className='item-box-dashboard-icon'>
                                                    <span
                                                        className="material-symbols-outlined text-2xl w-[60px] h-[60px] rounded-full bg-[#00c7be1a] flex items-center justify-center">weather_hail</span>
                                                </div>
                                                <div className='item-box-dashboard-text flex-1'>
                                                    <label className='block'>Đang học</label>
                                                    <span className="item-box-dashboard-text-number text-xl">{dataProgressCourse.length}</span>
                                                </div>
                                            </div>
                                            <div
                                                className='item-box-dashboard w-[calc((100%-40px)/3)] p-[20px] bg-[#f7f7fb] flex rounded-[20px] gap-[20px]'>
                                                <div className='item-box-dashboard-icon'>
                                                    <span
                                                        className="material-symbols-outlined text-2xl w-[60px] h-[60px] rounded-full bg-[#00c7be1a] flex items-center justify-center">weather_hail</span>
                                                </div>
                                                <div className='item-box-dashboard-text flex-1'>
                                                    <label className='block'>Đã hoàn thành</label>
                                                    <span className="item-box-dashboard-text-number text-xl">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course mt-6">
                                        <Tabs aria-label="Default tabs" variant="underline" >
                                            <Tabs.Item active title="Tất cả" icon={HiUserCircle}>
                                                <Swiper
                                                    slidesPerView={1}
                                                    spaceBetween={10}
                                                    cssMode={true}
                                                    // navigation={{
                                                    //     prevEl: prevRef.current,
                                                    //     nextEl: nextRef.current,
                                                    // }}
                                                    breakpoints={{
                                                        640: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 20,
                                                        },
                                                        768: {
                                                            slidesPerView: 2,
                                                            spaceBetween: 40,
                                                        },
                                                        1024: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 10,
                                                        },
                                                    }}
                                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                                    className="mySwiper relative"
                                                >
                                                    {dataMyCourse.map(function (item) {
                                                        return <SwiperSlide>
                                                                    <Card
                                                                        className="max-w-sm"
                                                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                                                        renderImage={() => <ImageBannerWithFallback width="500" height="500" src={ process.env.API_URL + item['course_feature_image']} alt="image 1"></ImageBannerWithFallback>}
                                                                    >
                                                                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                            { item.course_name }
                                                                        </h5>
                                                                        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4" dangerouslySetInnerHTML={{ __html: item.course_description }}></p>
                                                                        <Progress labelProgress
                                                                                  progressLabelPosition="inside"
                                                                                  size="lg"
                                                                                  progress={item['student_result']['percent_finish']}
                                                                        />
                                                                    </Card>
                                                                </SwiperSlide>
                                                    })}
                                                </Swiper>
                                            </Tabs.Item>
                                            <Tabs.Item title="Đang học" icon={HiUserCircle}>
                                                <Swiper
                                                    slidesPerView={1}
                                                    spaceBetween={10}
                                                    cssMode={true}
                                                    // navigation={{
                                                    //     prevEl: prevRef.current,
                                                    //     nextEl: nextRef.current,
                                                    // }}
                                                    breakpoints={{
                                                        640: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 20,
                                                        },
                                                        768: {
                                                            slidesPerView: 2,
                                                            spaceBetween: 40,
                                                        },
                                                        1024: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 10,
                                                        },
                                                    }}
                                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                                    className="mySwiper relative"
                                                >
                                                    {dataProgressCourse.map(function (item) {
                                                        return <SwiperSlide>
                                                            <Card
                                                                className="max-w-sm"
                                                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                                                renderImage={() => <ImageBannerWithFallback width="500" height="500" src={ process.env.API_URL + item['course_feature_image']} alt="image 1"></ImageBannerWithFallback>}
                                                            >
                                                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                    { item.course_name }
                                                                </h5>
                                                                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4" dangerouslySetInnerHTML={{ __html: item.course_description }}></p>
                                                                <Progress labelProgress
                                                                          progressLabelPosition="inside"
                                                                          size="lg"
                                                                          progress={item['student_result']['percent_finish']}
                                                                />
                                                            </Card>
                                                        </SwiperSlide>
                                                    })}
                                                </Swiper>
                                            </Tabs.Item>
                                            <Tabs.Item title="Đã hoàn thành" icon={HiUserCircle}>
                                                This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                                                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                                control the content visibility and styling.
                                            </Tabs.Item>
                                        </Tabs>
                                    </div>
                                </div>
                                <div id="setting" role="tabpanel" aria-labelledby="setting-tab" className={(selectedTab === 'setting') ? '' : 'hidden'}>
                                    <Tabs aria-label="Full width tabs" variant="fullWidth">
                                        <Tabs.Item active title="Thông tin" icon={HiUserCircle}>
                                            <form className="">
                                                <div className="grid md:grid-cols-2 md:gap-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="name-profile"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ vào tên</label>
                                                        <input type="text" id="name-profile"
                                                               value={formData.name}
                                                               name="name"
                                                               onChange={handleChangeDataProfile}
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               placeholder="Nguyễn văn a" required/>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="phone-profile"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                                                        <input type="phone"
                                                               id="phone-profile"
                                                               name="phone"
                                                               value={formData.phone}
                                                               onChange={handleChangeDataProfile}
                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 md:gap-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="name-profile"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ Email</label>
                                                        <label className="text-gray-900"> {(storedValue) ? storedValue.email : '' }</label>
                                                    </div>
                                                    <div className="mb-5">

                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 md:gap-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="phone-profile"
                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày sinh</label>
                                                        <Datepicker
                                                            language="vi-VN"
                                                            minDate={new Date(2023, 0, 1)}
                                                            maxDate={new Date(2023, 3, 30)}
                                                            selected={new Date(formData.dateOfBirth)}
                                                            onChange={handleDateChange}
                                                        />
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="name-profile"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                                                        <Badge color="info">Đang hoạt động</Badge>
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-1 md:gap-6">
                                                    <div className="mb-5">
                                                        <Label htmlFor="comment" className="mb-2 block" value="Địa chỉ" />
                                                        <Textarea id="comment"
                                                                  placeholder="199 Lý Chính Thắng phường 17 Gò vấp"
                                                                  value={formData.address}
                                                                  required
                                                                  rows={4}
                                                        />
                                                    </div>
                                                </div>
                                                <button type="button"
                                                        className="text-white bg-primaryColor disabled:bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        onClick={() => handleUpdateProfile()}
                                                        disabled={isFormUnchanged}
                                                >
                                                    Lưu lại
                                                </button>
                                            </form>
                                        </Tabs.Item>
                                        <Tabs.Item title="Ảnh đại diện" icon={HiUserCircle}>
                                            <div className="flex items-center">
                                                <Avatar img={image} size="xl" rounded bordered> </Avatar>
                                                <div className="avatar-button-upload">
                                                    <Button pill>
                                                        <label htmlFor="file-upload" className="cursor-pointer">Tải ảnh lên</label>
                                                    </Button>
                                                    <input
                                                        type="file"
                                                        id="file-upload"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={handleFileChange}
                                                    />
                                                </div>
                                            </div>
                                        </Tabs.Item>
                                    </Tabs>
                                </div>
                                <div id="order" role="tabpanel" aria-labelledby="order-tab" className={(selectedTab === 'order') ? '' : 'hidden'}>order
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default Profile;