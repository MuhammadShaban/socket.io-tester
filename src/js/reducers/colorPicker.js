const defaultState = {
    visible: false,
    top: 0
}

export default function colorPicker (state = defaultState, action) {
    switch (action.type) {

        case 'UPDATE_COLORPICKER':
        return Object.assign({}, state, action.state)

        default:
        return state
    }
}
