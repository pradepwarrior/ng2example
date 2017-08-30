import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleModuleComponent } from './example-module.component';

describe('ExampleModuleComponent', () => {
  let component: ExampleModuleComponent;
  let fixture: ComponentFixture<ExampleModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
