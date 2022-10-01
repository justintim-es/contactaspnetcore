import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { rdxContactFetch, RDX_CONTACT_FETCH_SUCCESS } from './actions';
import {switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private actions: Actions
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxContactFetch),
      switchMap(ac => aschax.post('/contact', {
        email: ac.email,
        body: ac.body
      }).then(res => {
        return {
          type: RDX_CONTACT_FETCH_SUCCESS,
        }
      }))
    )
  })
}
