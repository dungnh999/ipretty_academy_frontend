import TemplateAxios from "academy/helpers/axios";
import {GET_MY_COURSE, POST_UPDATE_AVATAR, POST_UPDATE_PROFILE} from "academy/service/constances";


function updateProfile(responseCb, errors, data) {
    return TemplateAxios.axiosTemplate('POST', POST_UPDATE_PROFILE, '', data, responseCb, errors);
}


function updateAvatar(responseCb, errors, data) {
    return TemplateAxios.axiosTemplateFile('POST', POST_UPDATE_AVATAR, '', data, responseCb, errors);
}

function myCourse(responseCb , errors, params = '') {
    return TemplateAxios.axiosTemplateFile('GET', GET_MY_COURSE, params, '', responseCb, errors);
}

const UsersService = {
    updateProfile,
    updateAvatar,
    myCourse
};

export default UsersService;

