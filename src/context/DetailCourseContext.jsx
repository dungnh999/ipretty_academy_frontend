import React, {createContext, useContext, useReducer} from 'react';
import {DetailCourseReducer, initialStartDataCourse } from "academy/reducers/DetailCourseReducer";
import {DetailCourseActionType } from "academy/constant/Course/DetailCourseTypeAction";
const { GET_DATA_DETAIL_COURSE, GET_LESSON_BY_ID, GET_SURVEY_STUDENT_WORKED, OPEN_CHAPTER, UPDATE_LESSON_LEARNED, UPDATE_RATING_AVG_FOR_COURSE } = DetailCourseActionType

export const DetailCourseContext = createContext();

export const DetailCourseProvider = ({children}) => {
    const [dataCourse, dispatch] = useReducer(DetailCourseReducer, initialStartDataCourse);

    const updateDataDetailCourse = (courseData) => dispatch({ type: GET_DATA_DETAIL_COURSE, payload: courseData })

    const getLessonById = (idChapter) => dispatch({ type: GET_LESSON_BY_ID, payload: idChapter })

    const joinMyCourse = () => ({})

    const DetailContext = {
        dataCourse,
        updateDataDetailCourse,
        getLessonById
    }

    return (
        <DetailCourseContext.Provider value={DetailContext}>
            { children }
        </DetailCourseContext.Provider>
    )
};

export const useDetailCourseContext = () => useContext(DetailCourseContext)

export default DetailCourseProvider;

