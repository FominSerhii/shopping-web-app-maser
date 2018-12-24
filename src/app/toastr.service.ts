import { Injectable } from '@angular/core';
declare var toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }
  success(title: string, msg?:string) {
		toastr.success(msg, title);
	}
}

	