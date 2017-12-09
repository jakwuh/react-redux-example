export const SET_CURRENT_USER_ACTION = 'set_current_user';

export function setCurrentUser(user) {
    return {
        user,
        type: SET_CURRENT_USER_ACTION
    }
}
