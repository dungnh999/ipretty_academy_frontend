
import { DetailCourseActionType} from "academy/constant/Course/DetailCourseTypeAction";
const { GET_DATA_DETAIL_COURSE, GET_LESSON_BY_ID, GET_SURVEY_STUDENT_WORKED, OPEN_CHAPTER, UPDATE_LESSON_LEARNED, UPDATE_RATING_AVG_FOR_COURSE } = DetailCourseActionType

export const initialStartDataCourse = {
    teacherInfo: {},
    courseInfo: {},
    listChapterLesson: [],
    certificate: {},
    dataLessonById: {},
    dataSurveyWorked: {},
    learningProcess: [],
    urlRedirect: [],
    firstLesson : {}
}

export const DetailCourseReducer = (state,  action) => {
    switch(action.type) {
        case GET_DATA_DETAIL_COURSE: {
            const courseData = action.payload;
            console.log(courseData);
            
            let listChapterLesson = [];
            const teacherInfo = {
                name: courseData.teacher ? courseData.teacher.name : "",
                about: courseData.teacher ? courseData.teacher.about : "",
                avatar: courseData.teacher ? courseData.teacher.avatar : "",
                teacher_id: courseData.teacher ? courseData.teacher.id : ""
            };
            const courseInfo = {
                description: `${courseData.course_name} ${courseData.course_description} ${courseData.course_target}`,
                startTime: courseData.startTime,
                endTime: courseData.endTime,
                name: courseData.course_name,
                created_at: courseData.created_at,
                number_of_students: courseData.number_of_students,
                scoreRating: courseData.scoreRating,
                course_description: courseData.course_description,
                course_target: courseData.course_target.course_target,
                course_feature_image: courseData.course_feature_image,
                certificate_image: courseData.certificate_image,
                isCompletedCourse: courseData.isCompletedCourse,
                percentResult: courseData.percentResult,
                completed_at: courseData.completed_at,
                course_id: courseData.course_id,
                rating: courseData.rating,
                comment: courseData.comment,
                rating_round: courseData.rating_round,
                course_type: courseData.course_type,
                course_price: courseData.course_price,
                course_sale_price: courseData.course_sale_price,
                unit_currency: courseData.unit_currency,
                rating_avg: courseData.rating_round ? parseFloat(courseData.scoreRating / courseData.rating_round) : 0,
                teacher_name: courseData.teacher ? courseData.teacher.name : "",
                teacher_about: courseData.teacher ? courseData.teacher.about : "",
                teacher_avatar: courseData.teacher ? courseData.teacher.avatar : "",
                teacher_id: courseData.teacher ? courseData.teacher.id : "" ,
                is_register: courseData.is_register,
                number_course_lesson: courseData.number_course_lesson ? courseData.number_course_lesson : 0,
                percent_done: courseData.percent_done ? courseData.percent_done : 0,
                number_learning: courseData.number_learning ? courseData.number_learning : 0,
                updated_at: courseData.updated_at
            };
            const learningProcess = courseData.learningProcess;
            const urlRedirectPage = [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'AllCourse',
                    path: '/'
                },
                {
                    name: courseData.course_name,
                    path: `/detail-course/${courseData.course_id}`,
                    isEnd: true
                }
            ]
            courseData.course_resources.chapters.forEach((chapter, indexChapter) => {
                let lessons = [];
                chapter.status = true;
                if(chapter.lessons && chapter.lessons.length) {
                    // let number_lessons = chapter.lessons.length - 1;
                    chapter.lessons.forEach((lesson, index) => {
                        lesson.id = lesson.lesson_id;
                        lesson.chapter_item_name = lesson.lesson_name;
                        lesson.timer = lesson.lesson_duration;
                        lesson.isPassed = lesson.learningProcess && lesson.learningProcess.isPassed;
                        // if (lesson.number_order === number_lessons) {
                        //     lesson.survey_id_next = chapter.survey.survey_id
                        //     lesson.index_chapter_next = chapter.number_order
                        //     lesson.index_item_next = number_lessons + 1
                        // } else if (lesson.number_order === 0) {
                        //     lesson.lesson_id_next = lesson[index + 1].lesson_id;
                        //     lesson.index_item_next = lesson.number_order + 1
                        //     lesson.index_chapter_next = chapter.number_order
                        //     lesson.index_chapter_pre = chapter.number_order - 1

                        // } else {
                        //     lesson.lesson_id_pre = chapter.lessons[index - 1].lesson_id;
                        //     lesson.index_item_pre = lesson.number_order - 1
                        //     lesson.index_chapter_pre = chapter.number_order
                        // }


                        if(chapter.lessons[index + 1] && chapter.lessons[index + 1].lesson_id) {
                            lesson.lesson_id_next = chapter.lessons[index + 1].lesson_id;
                            lesson.index_item_next = index + 1
                            lesson.index_chapter_next = indexChapter
                        } else {
                            if(chapter.survey && chapter.survey.survey_id) {
                                lesson.survey_id_next = chapter.survey.survey_id
                                lesson.index_chapter_next = indexChapter
                                lesson.index_item_next = index + 1
                            }
                        }

                        if(chapter.lessons[index - 1] && chapter.lessons[index - 1].lesson_id) {
                            lesson.lesson_id_pre = chapter.lessons[index - 1].lesson_id;
                            lesson.index_item_pre = index - 1
                            lesson.index_chapter_pre = indexChapter
                        } else {
                            if( courseData.course_resources.chapters[indexChapter - 1] &&
                                courseData.course_resources.chapters[indexChapter - 1].survey &&
                                courseData.course_resources.chapters[indexChapter - 1].survey.survey_id
                            ) {
                                lesson.survey_id_pre = courseData.course_resources.chapters[indexChapter - 1].survey.survey_id
                                lesson.index_item_pre = courseData.course_resources.chapters[indexChapter - 1].lessons && courseData.course_resources.chapters[indexChapter - 1].lessons.length ?
                                    courseData.course_resources.chapters[indexChapter - 1].lessons.length : 0
                                lesson.index_chapter_pre = indexChapter - 1
                            } else if(
                                courseData.course_resources.chapters[indexChapter - 1] &&
                                courseData.course_resources.chapters[indexChapter - 1].lessons &&
                                courseData.course_resources.chapters[indexChapter - 1].lessons.length
                            ) {
                                const lengthLesson = courseData.course_resources.chapters[indexChapter - 1].lessons.length
                                lesson.lesson_id_pre = courseData.course_resources.chapters[indexChapter - 1].lessons[lengthLesson - 1].lesson_id
                                lesson.index_chapter_pre = indexChapter - 1
                                lesson.index_item_pre = lengthLesson - 1
                            }
                        }
                        lessons.push(lesson);
                    })
                }
                if(chapter.survey && chapter.survey.survey_id) {
                    chapter.survey.id = chapter.survey.survey_id;
                    chapter.survey.chapter_item_name = chapter.survey.survey_title;
                    chapter.survey.isPassed = chapter.survey.learningProcess && chapter.survey.learningProcess.isPassed;
                    chapter.survey.rework = chapter.survey.learningProcess && chapter.survey.learningProcess.rework;

                    if(chapter.lessons && chapter.lessons.length) {
                        chapter.survey.lesson_id_pre = chapter.lessons[chapter.lessons.length - 1].lesson_id
                        chapter.survey.index_chapter_pre = indexChapter
                        chapter.survey.index_item_pre = chapter.lessons.length - 1
                    } else {
                        if(
                            courseData.course_resources.chapters[indexChapter - 1] &&
                            courseData.course_resources.chapters[indexChapter - 1].survey &&
                            courseData.course_resources.chapters[indexChapter - 1].survey.survey_id
                        ) {
                            chapter.survey.survey_id_pre = courseData.course_resources.chapters[indexChapter - 1].survey.survey_id
                            chapter.survey.index_chapter_pre = indexChapter - 1
                            chapter.survey.index_item_pre = courseData.course_resources.chapters[indexChapter - 1].lessons && courseData.course_resources.chapters[indexChapter - 1].lessons.length ? courseData.course_resources.chapters[indexChapter - 1].lessons.length : 0
                        } else if(
                            courseData.course_resources.chapters[indexChapter - 1] &&
                            courseData.course_resources.chapters[indexChapter - 1].lessons &&
                            courseData.course_resources.chapters[indexChapter - 1].lessons.length
                        ) {
                            const lengthLesson = courseData.course_resources.chapters[indexChapter - 1].lessons.length
                            chapter.survey.lesson_id_pre = courseData.course_resources.chapters[indexChapter - 1].lessons[lengthLesson - 1].lesson_id
                            chapter.survey.index_chapter_pre = indexChapter - 1
                            chapter.survey.index_item_pre = lengthLesson - 1
                        }
                    }
                    if(
                        courseData.course_resources.chapters[indexChapter + 1] &&
                        courseData.course_resources.chapters[indexChapter + 1].lessons &&
                        courseData.course_resources.chapters[indexChapter + 1].lessons.length
                    ) {
                        chapter.survey.lesson_id_next = courseData.course_resources.chapters[indexChapter + 1].lessons[0].lesson_id
                        chapter.survey.index_chapter_next = indexChapter + 1
                        chapter.survey.index_item_next = 0
                    } else if(
                        courseData.course_resources.chapters[indexChapter + 1] &&
                        courseData.course_resources.chapters[indexChapter + 1].survey &&
                        courseData.course_resources.chapters[indexChapter + 1].survey.survey_id
                    ) {
                        chapter.survey.survey_id_next = courseData.course_resources.chapters[indexChapter + 1].survey.survey_id
                        chapter.survey.index_chapter_next = indexChapter + 1
                        chapter.survey.index_item_next = 0
                    }
                    lessons.push(chapter.survey);
                }
                chapter.id = chapter.chapter_id
                chapter.chapter_items = lessons
                listChapterLesson.push(chapter);
            });
            const certificate = {
                certificate_image: courseData.certificate_image
            };
            if(courseData.learningProcess && courseData.learningProcess.length && courseData.learningProcess.length > 0) {
                let count = 0;
                for(let i = 0; i < listChapterLesson.length; i++) {
                    for(let j = 0; j < listChapterLesson[i].chapter_items.length; j++) {
                        listChapterLesson[i].chapter_items[j].isPassed = courseData.learningProcess[count] ? courseData.learningProcess[count].isPassed : 0;
                        count = count + 1;
                    }
                }
            }
            return {
                ...state,
                learningProcess: learningProcess,
                teacherInfo: teacherInfo,
                courseInfo: courseInfo,
                listChapterLesson: listChapterLesson,
                certificate: certificate,
                urlRedirect: urlRedirectPage,
                firstLesson: listChapterLesson.length > 0 ? listChapterLesson[0].chapter_items[0] : []
            }
        }
        case GET_LESSON_BY_ID: {
            const { chapterIndex, chapterItemIndex } = action.payload;
            let dataById;
            if (chapterIndex != undefined && chapterItemIndex != undefined) {
                dataById = state.listChapterLesson[chapterIndex].chapter_items[chapterItemIndex];
            }else {
                dataById = state.listChapterLesson[0].chapter_items[0];
            }
            return {
                ...state,
                dataLessonById: dataById
            }
        }
        case GET_SURVEY_STUDENT_WORKED: {
            const { chapterIndex, chapterItemIndex, result_survey } = action.payload;
            let dataSurveyWorked = state.listChapterLesson[chapterIndex].chapter_items[chapterItemIndex];
            dataSurveyWorked.isPassed = result_survey.isPassed;
            dataSurveyWorked.process = result_survey.process;
            dataSurveyWorked.status = 'marking';
            return {
                ...state,
                dataSurveyWorked: dataSurveyWorked
            }
        }
        case OPEN_CHAPTER: {
            let chapters = state.listChapterLesson
            chapters[action.payload].status = !chapters[action.payload].status
            return {
                ...state,
                listChapterLesson: chapters
            }
        }
        case UPDATE_LESSON_LEARNED: {
            const { chapterIndex, chapterItemIndex, dataCheckLesson } = action.payload
            const chaptersTemp = [...state.listChapterLesson]
            chaptersTemp[chapterIndex].chapter_items[chapterItemIndex].isPassed = dataCheckLesson.isPassed
            return {
                ...state,
                listChapterLesson: chaptersTemp
            }
        }
        case UPDATE_RATING_AVG_FOR_COURSE: {
            const { star } = action.payload;
            const courseInfoTerm = state.courseInfo;
            courseInfoTerm.scoreRating = Number(courseInfoTerm.scoreRating) + Number(star);
            courseInfoTerm.rating_round = courseInfoTerm.rating_round + 1;
            return {
                ...state,
                courseInfo: courseInfoTerm
            }
        }
        default: return state
    }
};