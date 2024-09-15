import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
 
  @Input()  search = "Initial"
  @Output() searchButtonClicked = new EventEmitter()

    searchClick() {
      this.searchButtonClicked.emit();
    }
}
