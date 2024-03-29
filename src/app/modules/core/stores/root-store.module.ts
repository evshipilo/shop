import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {ProductsStoreModule} from './product-store/products-store.module';
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule, RouterState, routerReducer} from '@ngrx/router-store';
import {routerReducers, CustomSerializer} from './router-store';
import {metaReducers} from "./meta-redusers";
import {environment} from "../../../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(routerReducers, {
            // All checks will automatically be disabled in production builds
            runtimeChecks: {
              strictStateImmutability: true,      // default value is true
              strictActionImmutability: true,     // default value is true
              strictStateSerializability: false,   // default value is false
              strictActionSerializability: false,  // default value is false
              strictActionWithinNgZone: true,     // default value is false
              strictActionTypeUniqueness: true    // default value is false
            }
        }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal,
            serializer: CustomSerializer // has a priority over routerState
        }),
        ProductsStoreModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ]
})
export class RootStoreModule {
}
