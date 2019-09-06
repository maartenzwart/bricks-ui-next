import {Component, ElementRef, forwardRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';
import {debounceTime, distinctUntilChanged, first, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ProjectService} from '../../../services/project.service';
import {BrxProject, BrxProjects} from '../../../interfaces/brx-project';

@Component({
  selector: 'brx-input-select-project',
  templateUrl: './input-select-project.component.html',
  styleUrls: ['./input-select-project.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectProjectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSelectProjectComponent),
      multi: true,
    }]
})
export class InputSelectProjectComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class')
  @Input()
  sizeClasses = 'col-lg-6 col-md-8 col-sm-10 col-12';
  @Input() label = '';
  @Input() name: string;
  @Input() placeholder = '';
  @Input() errorMessages: BrxInputErrorMessages;
  @Input() data: BrxProjects;
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;

  private inputValue: BrxProject;
  private errors: ValidationErrors;
  private objectKeys = Object.keys;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getProjects().pipe(first()).subscribe(result => this.data = result);
  }

  get value(): BrxProject {
    return this.inputValue;
  }

  set value(val: BrxProject) {
    this.inputValue = val;
    this.propagateChange(this.inputValue);
  }

  getErrorMessage(key: string) {
    const errorMsg = this.errorMessages.find(err => err.key.toLowerCase() === key.toLowerCase());
    if (!errorMsg) {
      return JSON.stringify(this.errors[key]);
    }
    return errorMsg.message;
  }

  propagateChange(_: any) {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: BrxProject): void {
    this.value = val;
    this.propagateChange(this.value);
  }

  validate(c: FormControl) {
    if (c.errors && c.dirty) {
      this.errors = c.errors;
    } else {
      this.errors = null;
    }
  }

  formatter(project: BrxProject): string {
    return project.name;
  }

  inputFormatter(project: BrxProject): string {
    return project.name || '';
  }

  change() {
    if (!this.value) {
      this.searchInput.nativeElement.value = '';
    } else {
      this.propagateChange(this.value);
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? [] : this.data.filter((item: BrxProject) => {
          const sTerm = term.toLowerCase().trim();
          return item.name.toLowerCase().indexOf(sTerm) > -1 ||
            item.id.toLowerCase().indexOf(sTerm) > -1;
        })
      )
    );
}
