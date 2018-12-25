class Services {
    static getData() {
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve({
                    "retCode":0,
                    "payRequest": {
                        "amount":"1000.00"
                    }
                })
            },3000)
        })
    }
}


export default Services;
