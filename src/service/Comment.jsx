import TemplateAxios from "academy/helpers/axios";
import {GET_LIST_COMMENT, GET_LIST_COMMENT_BY_COURSE} from "academy/service/constances";

function getListComment(responseCb, errors, param ){
    return TemplateAxios.axiosTemplate('GET', GET_LIST_COMMENT, '' , '' , responseCb, errors);
}

function getListCommentByCourse(responseCb, errors, param ){
    return TemplateAxios.axiosTemplate('GET', GET_LIST_COMMENT_BY_COURSE, param , '' , responseCb, errors);
}

const CommentService = {
    getListComment,
    getListCommentByCourse
};

export default CommentService