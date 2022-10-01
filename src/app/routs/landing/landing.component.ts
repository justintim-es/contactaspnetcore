import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RDX_CONTACT_FETCH, RDX_CONTACT_FETCH_SUCCESS } from 'src/app/redux/contact/actions';
import { rdxGetContactIsFetch, rdxGetContactIsFetchSuccess } from 'src/app/redux/contact/selectors';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  emailFormControl: FormControl;
  email: string;
  bodyFormControl: FormControl;
  body: string;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  constructor(
    private store: Store
  ) { 
    this.emailFormControl = new FormControl('', [
      Validators.required
    ]);
    this.email = '';
    this.bodyFormControl = new FormControl('', [
      Validators.required
    ])
    this.body = '';
    this.isFetch = this.store.select(rdxGetContactIsFetch);
    this.isFetchSuccess = this.store.select(rdxGetContactIsFetchSuccess);
  }

  ngOnInit(): void {
  }
  submit() {
    this.store.dispatch({
      type: RDX_CONTACT_FETCH,
      email: this.email,
      body: this.body
    });
  }

}
