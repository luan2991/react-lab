import axiosClients from "./axiosClient";

const postApi={
    getAll(params) {
        const url= '/posts';
        return axiosClients.get(url, {params});
    },

    getById(id) {
        const url=`/posts/${id}`;
        return axiosClients.get(url);
    },
    
    add(data){
        const url='/posts';
        return axiosClients.post(url,data)
    },

    update(data){
        const url=`/posts/${data.id}`;
        return axiosClients.put(url,data)
    },

    remove(id){
        const url=`/posts/${id}`;
        return axiosClients.delete(url);
    },
}
export default postApi