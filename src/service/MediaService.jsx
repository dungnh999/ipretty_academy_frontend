import TemplateAxios from "academy/helpers/axios";
import {GET_LIST_MEDIA} from "academy/service/constances";


function getMedia(responseCb, errors, param) {
    return TemplateAxios.axiosTemplate('GET', GET_LIST_MEDIA, param = param, null, responseCb, errors);
}

const MediaService = {
    getMedia,
};

export default MediaService;

