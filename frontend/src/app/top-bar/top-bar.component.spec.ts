import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create search input', () => {
    const inputEle = fixture.nativeElement.querySelector(
      `input[class='search']`
    );
    expect(inputEle).toBeTruthy();
  });

  it('should create search button', () => {
    const btnEle = fixture.nativeElement.querySelector(
      `button[class='search']`
    );
    expect(btnEle).toBeTruthy();
  });
});
