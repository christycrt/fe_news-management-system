const initalState = {
    data: [
        { id: 1, name: `Panupong`, score: 99 },
        { id: 2, name: `Joknoi`, score: 98 },
    ],
    jwt: localStorage.getItem('jwt')
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'DEL_DATA':
            const deletedState = {
                ...state,
                data : state.data.filter(item => item.id !== action.playload)
            };
            return deletedState;
        case 'ADD_DATA':
            const addedState = state;
            return addedState;
        default:
            break;
    }
    return state;
}
export default reducer