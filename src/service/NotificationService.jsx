import axiosTemplate from "academy/helpers/axios";
import {GET_LIST_NOTIFICATIN} from "academy/service/constances";

function getListNotification(responseCb, errors, param){
    return axiosTemplate('GET', GET_LIST_NOTIFICATIN, param , '' , responseCb, errors);
}

const NotificationService = {
    getListNotification
};

export default NotificationService;