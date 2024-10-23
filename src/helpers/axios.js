import axios from 'axios'
import {AUTH_POST_LOGIN_URL} from "academy/service/constances";
import {getTokens} from "academy/helpers/utils";
import Swal from 'sweetalert2'

const axiosCustom = axios.create()
axiosCustom.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const status = error.response.status;
    // switch (status) {
    //     // case 403:
    //     // window.location.href = "/#/error/403";
    //     // break;
    //     // case 404:
    //     // window.location.href = "/#/error/404";
    //     // break;
    //     case 500:
    //     window.location.href = "/#/error/500";
    //     break;
    //     case 401:
    //     localStorage.clear();
    //     window.location.replace("/");
    //     break;
    //     default:
    //     break;
    // }
    // return Promise.reject(error);
    let res = {};
    if (error.response) {
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;
    } else if (error.request) {
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error);
    }

    return res;
});

function axiosTemplate(method , url , param , data, responseCb , errorCb){
    console.log('api: ' + url + ' / Token: ' + getTokens().authToken );
    axiosCustom({
        method: method,
        url: url,
        params: param,
        data: data,
        headers: {
            "Authorization": "Bearer " + getTokens().authToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
    .then(response => {        
         // Kiểm tra mã trạng thái ở đây
         if (response.status === 401 && localStorage.getItem('authToken')) {
            let timerInterval;
            Swal.fire({
                title: "Thông báo",
                text: "Hết phiên đăng nhập vui lòng đăng nhập lại !",
                icon: "warning",
                timer: 200,
              timerProgressBar: true,
              willClose: () => {
                clearInterval(timerInterval);
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                 // Xóa token (nếu cần)
                localStorage.removeItem('authToken'); // Hoặc sử dụng phương thức khác để xóa token
                localStorage.removeItem('user'); // Hoặc sử dụng phương thức khác để xóa token

                // Chuyển hướng về trang đăng nhập hoặc tải lại trang
                window.location.href = '/login'; // Hoặc window.location.reload();
                return; // Dừng lại ở đây nếu bạn không muốn tiếp tục xử l        
              }
            });
        }
        
        // Nếu yêu cầu thành công và không phải 401, gọi callback response
        responseCb(response);
    })
    .catch(errorCb)
}

export default axiosTemplate

