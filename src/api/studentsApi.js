import axiosClients from "./axiosClient";

const studentsApi={
    getAll(params) {
        const url= '/students';
        return axiosClients.get(url, {params});
    },

    // getById(id) {
    //     const url=`/students/${id}`;
    //     return axiosClients.get(url);
    // },
    
    // add(data){
    //     const url='/students';
    //     return axiosClients.post(url,data)
    // },

    // update(data){
    //     const url=`/students/${data.id}`;
    //     return axiosClients.put(url,data)
    // },

    // remove(id){
    //     const url=`/students/${id}`;
    //     return axiosClients.delete(url);
    // },
}
export default studentsApi