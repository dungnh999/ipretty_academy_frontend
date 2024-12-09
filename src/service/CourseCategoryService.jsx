import TemplateAxios from "academy/helpers/axios";
import {GET_LIST_CATEGORY_COURSE, GET_LIST_COURSE_CATEGORY} from "academy/service/constances";

function getListCategoryCourse(responseCb, errors, param = ''){
    return TemplateAxios.axiosTemplate('GET', GET_LIST_CATEGORY_COURSE, param, '' , responseCb, errors);
}


function getListCourseCategory(responseCb, errors, param = ''){
    // console.log('GET', GET_LIST_COURSE_CATEGORY, param, '' , responseCb, errors)
    return TemplateAxios.axiosTemplate('GET', GET_LIST_COURSE_CATEGORY, param, '' , responseCb, errors);
}

const CourseCategoryService = {
    getListCategoryCourse,
    getListCourseCategory
};

export default CourseCategoryService;