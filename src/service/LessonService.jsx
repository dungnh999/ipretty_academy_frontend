import TemplateAxios from "academy/helpers/axios";
// import {GET_LESSON_URL, DELETE_LESSONS_URL, UPDATE_PROCESS_LESSON, GET_ALL_COURSE_URL} from "academy/service/constances";
import {UPDATE_PROCESS_LESSON} from "academy/service/constances";

// function getListLesson(params, responseCb, errorCb) {
//     axios
//         .get(withQuery(GET_LESSON_URL, params), xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }
//
// function create( data, responseCb, errorCb) {
//     const isformData = true
//     axios
//         .post(GET_LESSON_URL, data, xAuthToken(isformData))
//         .then(responseCb)
//         .catch(errorCb)
//
// }
//
// function getDetailLesson(id, responseCb, errorCb) {
//     axios
//         .get(GET_LESSON_URL + `/${id}`, xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }
//
// function deleteAttachment(id, data, responseCb, errorCb) {
//     const isformData = true
//     axios
//         .post(GET_LESSON_URL + `/${id}/media`, data, xAuthToken(isformData))
//         .then(responseCb)
//         .catch(errorCb)
// }
//
// function update(id, data, responseCb, errorCb) {
//     const isformData = true
//     axios
//         .post(GET_LESSON_URL + `/${id}`, data, xAuthToken(isformData))
//         .then(responseCb)
//         .catch(errorCb)
// }
//
// function deleteLessons(data) {
//     const isformData = true
//     return axios.post(DELETE_LESSONS_URL, data, xAuthToken(isformData))
// }

function updateProcessLesson(data) {
    return TemplateAxios.axiosTemplate('POST', UPDATE_PROCESS_LESSON, '', data);
}

const LessonService = {
    // getListLesson,
    // create,
    // deleteLessons,
    // getDetailLesson,
    // deleteAttachment,
    // update,
    updateProcessLesson
};

export default LessonService;