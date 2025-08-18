const initState = {
    themeId: 1,
}

export type SetThemeIdAction = {
    type: 'SET_THEME_ID'
    payload: { id: number }
}

type ThemeActions = SetThemeIdAction

export const themeReducer = (state = initState, action: ThemeActions): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.payload.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdAction => ({ type: 'SET_THEME_ID', payload: { id } }) // fix any