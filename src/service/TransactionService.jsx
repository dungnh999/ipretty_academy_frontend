import TemplateAxios from "academy/helpers/axios";
import {CREATE_ORDER_TRANSACTIONS_COURSE} from "academy/service/constances";

function createOrderTransactionsCourse(responseCb, errors, data) {
    return TemplateAxios.axiosTemplate('POST', CREATE_ORDER_TRANSACTIONS_COURSE, '', data, responseCb, errors);
}

const TransactionService = {
    createOrderTransactionsCourse
};

export default TransactionService;