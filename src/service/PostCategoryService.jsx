import React from 'react';
import {GET_LIST_POST_CATEGORY} from "academy/service/constances";
import TemplateAxios from "academy/helpers/axios";


function getListPostCategory(responseCb, errors, param ){
    return TemplateAxios.axiosTemplate('GET', GET_LIST_POST_CATEGORY, param , '' , responseCb, errors);
}


const PostCategoryService = {
    getListPostCategory,
};

export default PostCategoryService;