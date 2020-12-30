import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/hauliers/hauliers"



export default {

    haulier(url = baseUrl) {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}
