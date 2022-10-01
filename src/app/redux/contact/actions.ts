import { createAction, props } from "@ngrx/store";

export const RDX_CONTACT_FETCH = 'RDX_CONTACT_FETCH';
export const rdxContactFetch = createAction(
    RDX_CONTACT_FETCH,
    props<{ email: string, body: string }>()
)
export const RDX_CONTACT_FETCH_SUCCESS = 'RDX_CONTACT_FETCH_SUCCESS';
export const rdxContactFetchSuccess = createAction(
    RDX_CONTACT_FETCH_SUCCESS,
    props<any>()
)