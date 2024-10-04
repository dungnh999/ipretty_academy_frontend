import {GET_BANNER} from './constances';
import axiosTemplate from "academy/helpers/axios";

function getBanner(reponse , error) {
    return axiosTemplate('get',GET_BANNER, '', '', reponse , error)
}


const BannerService = {
    getBanner
};

export default BannerService;