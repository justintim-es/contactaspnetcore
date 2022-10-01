import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IContactReducer } from "./reducer"

const getContactFeatureState = createFeatureSelector<IContactReducer>('contactReducer')
export const rdxGetContactIsFetch = createSelector(
    getContactFeatureState,
    state => state.isFetch
)
export const rdxGetContactIsFetchSuccess = createSelector(
    getContactFeatureState,
    state => state.isFetchSuccess
)