export default class APISerive {
    
    static LoginUser(body){
        return fetch('http://localhost:8000/api/v1/app/login/',{
            method:'POST',
            headers: {
                'Accept'  : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static RegisterUser(body){  
        return fetch('http://localhost:8000/api/v1/app/signup/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}