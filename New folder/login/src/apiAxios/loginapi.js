import axiosClient from "./axiosCkinent";
const loginapi = {

    getlogin() {
        const url = '/login'
        return axiosClient.get(url);
    },
    postlogin(data) {
        const url = '/loginpost'
        return axiosClient.post(url,data);
    }
}
export default loginapi;