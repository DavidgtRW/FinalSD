import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UtilsService } from '../service/utils.service';

@Directive({
  selector: '[appCloseModal]'
})
export class BackHistoryDirective {

  constructor(private element: ElementRef, private location: Location) { }

  @HostListener("click")
  public closeModal() {
    this.element.nativeElement.parentElement.parentElement.parentElement.style.display = "none";
  }
}

@Directive({
  selector: '[backHistory]'
})
export class BackHistory {

  constructor(private location: Location, private router: Router) { }

  @HostListener("click")
  public backHistory() {
    if (window.history.length > 1)
      this.location.back();
    else
      this.router.navigate(['']);
  }
}

@Directive({
  selector: '[closeModalConfiguracion]'
})
export class CloseModalConfiguracion implements OnInit {

  url: string = '';

  constructor(
    private router: Router,
    private utilService: UtilsService) { }

  ngOnInit(): void {
    this.url = this.utilService.getUrl();

  }

  @HostListener("click")
  public closeModalConfiguracion() {
    if (this.url.length > 0)
      this.router.navigateByUrl(this.url)
    else
      this.router.navigate(['']);
    ;
  }
}

