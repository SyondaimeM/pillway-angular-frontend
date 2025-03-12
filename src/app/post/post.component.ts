import { Component, OnInit, ViewChild, signal, computed, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'body'];

  // State management with Angular Signals
  private posts = signal<Post[]>([]);
  private filterQuery = signal<string>('');
  private currentPage = signal<number>(0);
  private pageSize = signal<number>(10);

  filteredPosts = computed(() => {
    const query = this.filterQuery().toLowerCase();
    return this.posts().filter((post) =>
      post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query)
    );
  });

  paginatedPosts = computed(() => {
    const startIndex = this.currentPage() * this.pageSize();
    return this.filteredPosts().slice(startIndex, startIndex + this.pageSize());
  });

  dataSource!: MatTableDataSource<Post>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isDarkTheme = false; // For theme toggling

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadPosts();
    this.dataSource = new MatTableDataSource();
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'id': return item.id;
        case 'title': return item.title.toLowerCase();
        case 'body': return item.body.toLowerCase();
        default: return (item as any)[property];
      }
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadPosts() {
    // Lazy load posts data via API
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((posts) => {
      this.posts.set(posts);
      this.updateDataSource();
    });
  }

  updateDataSource() {
    // Update the data source whenever paginatedPosts changes
    this.dataSource.data = this.paginatedPosts();
    if (this.paginator) {
      this.paginator.length = this.filteredPosts().length;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filterQuery.set(filterValue);
    this.currentPage.set(0); // Reset to first page
    this.updateDataSource();
  }

  onPageChange(event: any) {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.updateDataSource();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    this.cdr.detectChanges();  // Trigger change detection
  }
}
