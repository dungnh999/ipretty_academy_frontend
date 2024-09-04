import axiosTemplate from "academy/helpers/axios";

import {GET_PAYMENTS_COURSE} from "academy/service/constances";

function getPaymentCourse(responseCb, errors, data) {
    return axiosTemplate('POST', GET_PAYMENTS_COURSE, '', data, responseCb, errors);
}

const PaymentService = {
    getPaymentCourse
};

export default PaymentService;