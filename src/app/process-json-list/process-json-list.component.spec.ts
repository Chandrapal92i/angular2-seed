import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessJsonListComponent } from './process-json-list.component';

describe('ProcessJsonListComponent', () => {
  let component: ProcessJsonListComponent;
  let fixture: ComponentFixture<ProcessJsonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessJsonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessJsonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
