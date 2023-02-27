import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { By } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [
        RouterModule.forRoot([]),
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    component.books = [
      {
        title: 'The Book Thief',
        category: 'Literature',
        author: 'Markus Zusak',
        translator: '呂玉嬋',
        publisher: '木馬文化',
        date: '2019-01-09',
        price: 320,
        introduction: '這是第一本書',
      },
      {
        title: 'A Thousand Splendid Suns',
        category: 'Literature',
        author: 'Khaled Hosseini',
        translator: '李靜宜',
        publisher: '木馬文化',
        date: '2013-12-26',
        price: 300,
        introduction: '這是第二本書',
      },
      {
        title: 'The Book Thief',
        category: 'Literature',
        author: 'Markus Zusak',
        publisher: '木馬文化',
        date: '2019-01-09',
        price: 320,
        introduction:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create mat-grid-list', () => {
    let matGridListEle = fixture.nativeElement.querySelector(`mat-grid-list`);
    expect(matGridListEle).toBeTruthy();
  });

  it('should create mat-grid-tile', () => {
    let matGridTileEle = fixture.nativeElement.querySelector(`mat-grid-tile`);
    expect(matGridTileEle).toBeTruthy();
  });

  it('should create 3 cards', () => {
    let matGridTileEle = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(matGridTileEle.length).toEqual(3);
  });
});
