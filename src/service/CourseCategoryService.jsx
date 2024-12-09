import TemplateAxios from "academy/helpers/axios";
import {GET_LIST_CATEGORY_COURSE} from "academy/service/constances";

function getListCategoryCourse(responseCb, errors, param = ''){
    return TemplateAxios.axiosTemplate('GET', GET_LIST_CATEGORY_COURSE, param, '' , responseCb, errors);
}

const CourseCategoryService = {
    getListCategoryCourse
};

export default CourseCategoryService;