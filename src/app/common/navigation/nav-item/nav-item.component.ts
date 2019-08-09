import {
  AfterViewInit,
  Component, ComponentFactoryResolver,
  Input,
  OnInit, ViewChild, ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'brx-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit, AfterViewInit {
  @Input() path = '/';
  @Input() title = 'Home';
  @Input() icon: any;
  @Input() firstItem = false;
  @Input() cssClass = '';
  @ViewChild('brxDynamicComponent', {read: ViewContainerRef, static: false}) dynamicHost;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.icon) {
      this.loadComponent();
    }
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.icon);
    this.dynamicHost.createComponent(componentFactory);
  }


}
