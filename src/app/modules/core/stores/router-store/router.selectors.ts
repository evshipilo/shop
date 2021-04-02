
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import {RouterState, RouterStateUrl} from "./router.state";

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const {
    selectQueryParams, // select the current route query params
    selectRouteParams, // select the current route params
    selectRouteData, // select the current route data
    selectUrl // select the current url
} = getSelectors(selectRouterState);

