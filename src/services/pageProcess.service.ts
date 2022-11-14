import { BehaviorSubject } from "rxjs";

class PageProcessServiceController{
    private porcess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public process = this.porcess$.asObservable();


    start(){
        this.porcess$.next(true)
    }
    stop(){
        this.porcess$.next(false)
    }

}

export const PageProcessService = new PageProcessServiceController();