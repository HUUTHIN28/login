import axiosClient from "./axiosCkinent";

const Courseapi = {

    Gettop() {
        const url = '/coures'
        return axiosClient.get(url);
    },





    Posttop(body) {
        const url = '/addcoures'
        console.log('thìndfdfd',);
        return axiosClient.post(url, body

        );


    },

    // deletetop(id) {
    //     const url = `/deletecoures/${id}`
    //     return axiosClient.delete(url);
    // },
    deletetop(body) {
        const url = "/deletecoures"
        console.log('bodyy', body)
        return axiosClient.post(url, body);
    },

    updatetop(param) {
        const url = "/edits"
        return axiosClient.post(url, param);
    }
};
export default Courseapi;