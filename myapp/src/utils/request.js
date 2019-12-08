import axios from "axios"
const instance = axios.create({
    baseURL: "https://baojia.chelun.com",
    timeout: 1000
})
instance.interceptors.request.use(function (config) {
    return config
}, function (err) {
    return Promise.reject(console.log(error)
    )
}
)
instance.interceptors.response.use(function (response) {
    if (response.status == 200) {
        return response.data
    } else {
        this.$notify({
            type: "warning",
            message: response.text
        })
    }
},
    function (error) {
        this.$notify({
            type: "warning",
            message: error
        })
    }
)
export default instance