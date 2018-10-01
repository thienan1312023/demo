import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBibleComponent } from './content-bible.component';

describe('ContentBibleComponent', () => {
  let component: ContentBibleComponent;
  let fixture: ComponentFixture<ContentBibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
