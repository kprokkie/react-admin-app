import * as actionsTypes from './actionsTypes';

// actions creators

export function createCourse(course) {
    return { type: actionsTypes.CREATE_COURSE, course: course }
}