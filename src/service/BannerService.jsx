import {GET_BANNER} from './constances';
import TemplateAxios from "academy/helpers/axios";

function getBanner(reponse , error) {
    return TemplateAxios.axiosTemplate('get',GET_BANNER, '', '', reponse , error)
}


const BannerService = {
    getBanner
};

export default BannerService;