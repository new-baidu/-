const getters = {
    token: state =>{
        console.log(state) 
        return state.user.token
    }
}
export default getters