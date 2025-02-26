import TemplateAxios from "academy/helpers/axios";
import {GET_DETAIL_POST, GET_LIST_POST} from "academy/service/constances";


function getListPost(responseCb, errors, param ){
    return TemplateAxios.axiosTemplate('GET', GET_LIST_POST, '' , '' , responseCb, errors);
}


function getDetailPost(responseCb, errors, param ){
    return TemplateAxios.axiosTemplate('GET', GET_DETAIL_POST, param , '' , responseCb, errors);
}


const PostService = {
    getListPost,
    getDetailPost
};

export default PostService