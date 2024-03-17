import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-test-tbootstrap',
  templateUrl: './test-tbootstrap.component.html',
  styleUrl: './test-tbootstrap.component.css'
})
export class TestTbootstrapComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
