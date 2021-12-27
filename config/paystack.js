const paystack =(request)=>{
    const initializePayment = (form, mycallback)=>{
        const options ={
            url="https://851f-45-125-4-5.ngrok.io/callback",
            headers = {
                'content-type' : 'application/json',
            },
            detail 
            
        }
        const callback = (error, response, body)=>{
            return mycallback(error, body)
        }
        request.post(options, callback)
    }

    const verifyPayment = (ref, mycallback)=>{
        const options={
            url="https://851f-45-125-4-5.ngrok.io/callback",
            headers={
                'content-type':'application'
            }
        }
        const callback =(error, response, body)=>{
            return mycallback(error, body)
        }
        request(options, callback)
    }
    return {initializePayment, verifyPayment};
}
module.exports = paystack;