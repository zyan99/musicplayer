(function (Vue, axios) {
    // 配置域名 baseURL
    // 创建实例
    const Axios = axios.create({
        baseURL: 'https://apimusic.linweiqin.com/',
        timeout: 10000,
        // 自定义的请求头
        // headers:{
        //  'X-Custom-Header': 'web0316'
        // },
        // 默认允许的请求头 Content-Type
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // 添加请求的拦截器
    Axios.interceptors.request.use(function (config) {

        // config.params["key"] = "web0316";


        app.isLoading = true;
        return config;
    }, function (error) {
        return Promise.reject(error)
    });

    // 返回的拦截器
    Axios.interceptors.response.use(function (response) {
        // 只获取返回数据中的 data 部分
        app.isLoading = false;
        return response.data;
    }, function (error) {
        return Promise.reject(error)
    })

    window.Axios = Axios;

})(Vue, axios)