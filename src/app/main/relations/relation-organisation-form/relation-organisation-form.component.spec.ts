import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RelationOrganisationFormComponent} from './relation-organisation-form.component';

describe('RelationOrganisationFormComponent', () => {
  let component: RelationOrganisationFormComponent;
  let fixture: ComponentFixture<RelationOrganisationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelationOrganisationFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationOrganisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
