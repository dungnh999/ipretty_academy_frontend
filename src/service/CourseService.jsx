import axiosTemplate from "academy/helpers/axios";
import {GET_ALL_COURSE_URL, GET_DETAIL_COURSE_BY_SLUG_URL, GET_COURSE_URL, CHECK_JOIN_COURSE_URL} from "academy/service/constances";

function getCourse(responseCb, errorCb, email, password, isAdminPage) {
    axiosTemplate('GET',GET_ALL_COURSE_URL, '', { email, password, isAdminPage }, responseCb, errorCb );
}


function getDetailCourseBySlug( responseCb, errorCb ,slug){
    axiosTemplate('GET', GET_DETAIL_COURSE_BY_SLUG_URL, { slug : slug } , '', responseCb, errorCb );
}

function checkJoinCourse(responseCb, errorCb ,id) {
    axiosTemplate('POST', GET_COURSE_URL + `/${id}/` + CHECK_JOIN_COURSE_URL , '' , '', responseCb, errorCb);
}


const CourseService = {
    getCourse , getDetailCourseBySlug , checkJoinCourse
};

export default CourseService;
