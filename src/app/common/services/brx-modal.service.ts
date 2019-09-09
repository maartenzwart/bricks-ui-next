import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class BrxModalService {

  constructor(private modalService: NgbModal) {
  }

  public open(content): NgbModalRef {
    return this.modalService.open(content, {
      size: 'xl',
      windowClass: 'modal-full',
      backdrop: 'static',
      backdropClass: 'brx-modal-backdrop'
    });
  }
}
