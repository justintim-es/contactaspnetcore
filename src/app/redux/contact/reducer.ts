import { createReducer } from "@ngrx/store";
import { rdxContactFetch, rdxContactFetchSuccess } from "./actions";
import { on } from '@ngrx/store';
export interface IContactReducer {
    isFetch: boolean;   
    isFetchSuccess: boolean;
}
export const contactInitial: IContactReducer = {
    isFetch: false,
    isFetchSuccess: false
}
export const contactReducer = createReducer(
    contactInitial,
    on(rdxContactFetch, (state: IContactReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false
        }
    }),
    on(rdxContactFetchSuccess, (state: IContactReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    })
)