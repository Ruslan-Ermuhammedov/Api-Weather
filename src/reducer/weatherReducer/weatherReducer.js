export const weatherInitialState = {
    datas: null,
    isLoading: false,
    isSuccess: false,
    error: ""
}
export const weatherReducer = (state, action) => {
    switch (action.type) {
        case "LOADING": {
            return state = {
                ...state,
                isLoading: true
            }
        }
        case "SUCCESS": {
            return state = {
                isLoading: false,
                isSuccess: true,
                datas: action.payload,
                error: ''
            }
        }
        case "REJECTED": {
            return state = {
                isLoading: false,
                isSuccess: false,
                datas: null,
                error: action.payload
            }
        }
    }
}