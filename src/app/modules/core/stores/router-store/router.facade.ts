import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../../products/models/product.model";
import * as RouterSelectors from './router.selectors';
import { select } from '@ngrx/store';
import {Params} from "@angular/router";
import {RouterState} from "./router.state";

@Injectable({
    providedIn: 'root',
})
export class RouterStateFacadeService {


    constructor(
        private store: Store<RouterState>,
    ) { }

    get idFromRout$(): Observable<any> {
        return this.store.pipe(select(RouterSelectors.selectUrl));
    }





}
