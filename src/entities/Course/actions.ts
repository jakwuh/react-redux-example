export const COMPLETE_COURSE_ACTION = 'complete_course';

export function completeCourse(card) {
    return {
        cardId: card.id,
        type: COMPLETE_COURSE_ACTION
    }
}
