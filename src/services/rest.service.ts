import { Observable } from "rxjs";

export abstract class RestService{

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })

    private api :string = 'https://pokeapi.co/api/v2'

    public setApi(api){
        this.api = api
    }

    private request(endPoint : string,method:string, data: any){
        method = method.toUpperCase();

        if(!this.api){
            throw new Error("no api is set")
        }
        let api = this.api + endPoint
        let init = {
            method,
            body:null,
        }
        if (data && method !== 'GET'){
            init.body = JSON.stringify(data)
        }
        if (data && method === 'GET'){
           const queryString = Object.keys(data).map(key=> key + '=' + data[key]).join('&')
           api = api + "?" + queryString
        }
    }





    public read(url,data?):Observable<any>{
        console.log(url)
        return this.fetch(this.request(url,"GET",data))
    }


    private fetch(request){
        return new Observable (observable => {
            fetch(request).then(response => {

                response.text().then(text =>{
                    let data
                    try{
                        data = JSON.parse(text)
                    }catch(err){
                        data = text || null
                    }
                    if(response.ok){
                        observable.next(data)
                    }else{
                        observable.error(Object.assign(data || {}, {_response:response}));
                    }
                    observable.complete();
                })
            }).catch(e => {
                observable.error((!e.hasOwnProperty("json")) ? e : e.json)
                observable.complete()
            })
        })
    }
}