import React, {useContext} from 'react';
import play from 'academy/assets/icons/play'
import {useDetailCourseContext} from "academy/context/DetailCourseContext";
import ImageBannerWithFallback from "academy/components/Image/ImageBannerWithFallback";
import ModalTemplate from "academy/components/Modal/ModalTemplate";
import CourseService from "academy/service/CourseService"
import {useDispatch, useSelector} from 'react-redux';
import { addToCart} from 'academy/constant/Cart/CartAction'
import {formartCurrencyVNĐ, getTokens} from "academy/helpers/utils";

import ReactPlayer from "react-player";
import {useNavigate, useParams} from "react-router-dom";
import {AuthContext} from "academy/context/Authcontext";
import {toast} from "react-toastify";
import ModalReview from './ModalReview';

const Sidebar = (props) => {
    const {dataCourse} = useDetailCourseContext();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { state } = useContext(AuthContext);
    const navigate = useNavigate();
    const { slug } = useParams();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemCarts);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    async function joinCourse(){
        if(state.user || state.isAuthenticated){
            let res = await CourseService.checkJoinCourse(handleResponeseCheckJoin,handleErrorCheckJoin ,dataCourse['courseInfo']['course_id']);
        }else {
            toast.warn('vui lòng đăng nhập');
            navigate('/login')
        }
    }

    function handleResponeseCheckJoin(res){
        navigate(`/course/${slug}/learn/lecture/${dataCourse['firstLesson']['lesson_id']}`);
    }

    function handleErrorCheckJoin(e){

    }

    const handleAddToCart = () => {
        let user = getTokens();
        if(user.authToken){
            dispatch(addToCart(dataCourse['courseInfo']));
        }else {
            navigate('/login')
        }
    };

    function goToCart(){
        navigate('/cart')
    }

    return(
        <>
            <div className='text-white gap-0 w-[20rem] mt-[-190px]'>
                <div className='border-bgLigthGrey rounded-3xl overflow-hidden sticky top-[72px] shadow-xl'>
                    <div className='relative cursor-pointer h-[250px]' onClick={openModal}>
                        <img className='absolute h-[60px] w-[60px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={play}/>
                        <ImageBannerWithFallback src={process.env.API_URL + dataCourse['courseInfo']['course_feature_image']} className='w-full h-full border-none object-cover'/>
                    </div>
                    <div className='flex justify-center p-[1.88rem] items-center flex-col gap-[1rem] bg-whiteColor'>
                        <div className='price flex gap-[0.5rem] items-center'>
                            {
                                (dataCourse['courseInfo']['course_sale_price'] > 0)
                                    ?  <>
                                            <span className='line-through text-subColor text-sm'>{formartCurrencyVNĐ(parseFloat(dataCourse['courseInfo']['course_price']))}</span>
                                            <span className='font-semibold text-redColor capitalize leading-normal text-base'>{formartCurrencyVNĐ(parseFloat(dataCourse['courseInfo']['course_sale_price']))}</span>
                                        </>
                                    :   <span className='font-semibold text-redColor capitalize leading-normal text-base'>Miễn Phí</span>
                            }

                        </div>
                        <div className='btn-start w-full'>
                            {/*<button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full w-full mb-4' onClick={joinCourse}>Tham gia</button>*/}
                            {/*<button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full w-full mb-4' onClick={() => dispatch(addToCart(dataCourse['courseInfo']))}>Thêm giỏ hàng</button>*/}
                            {/*<button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full w-full' onClick={goToCart}>Đi đến giỏ hàng</button>*/}
                            {
                                dataCourse['courseInfo']['is_register']
                               ? <button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full w-full' onClick={joinCourse}>Tham gia</button>
                               : (items.some(obj => obj.course_id === dataCourse['courseInfo']['course_id']))
                                   ? <button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full w-full' onClick={goToCart}>Đi đến giỏ hàng</button>
                                   : <button className='bg-primaryColor px-[1.5rem] py-[0.62rem] rounded-full w-full' onClick={handleAddToCart}>Thêm giỏ hàng</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <ModalReview
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                lesson = ''
            />
        </>
    )
};

export default Sidebar;