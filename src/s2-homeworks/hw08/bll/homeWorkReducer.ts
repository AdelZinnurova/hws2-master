import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state].sort((a, b) => a.name.localeCompare(b.name))
            return action.payload === 'up' ? sortedState : sortedState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}
