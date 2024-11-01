import { Component, EventEmitter, Input, Output, signal } from "@angular/core";
import { NgForOf, NgIf } from "@angular/common";

export interface Tab {
  title: string;
}

@Component({
  selector: "app-tab-group",
  imports: [NgForOf, NgIf],
  template: ` <div class="tabs">
    <ul class="tab-titles">
      <li
        *ngFor="let tab of tabs; let i = index"
        [class.active]="i === selectedIndex()"
        (click)="selectTab(i)"
      >
        {{ tab.title }}
        <button class="close-btn" (click)="closeTab(i)">X</button>
      </li>
    </ul>
    <div class="tab-content">
      <ng-content />
    </div>
  </div>`,
  standalone: true,
  styles: `
    .tabs {
      width: 100%;
    }

    .tab-titles {
      list-style-type: none;
      display: flex;
      padding: 0;
    }

    .tab-titles li {
      padding: 10px;
      cursor: pointer;
      position: relative;
      background: #e0e0e0;
      margin-right: 5px;
      border-radius: 5px 5px 0 0;
    }

    .tab-titles li.active {
      background: #007bff;
      color: white;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #ff0000;
      font-weight: bold;
      cursor: pointer;
      margin-left: 10px;
    }

    .tab-content {
      padding: 10px;
      border-style: solid;
      border-radius: 8px;
      border-width: 1px;
    }
  `,
})
export class TabGroupComponent {
  @Input() tabs: Tab[] = [];
  @Output() closeEmitter: EventEmitter<number> = new EventEmitter<number>();

  selectedIndex = signal(0);

  closeTab(index: number): void {
    this.tabs.splice(index, 1);
    this.closeEmitter.emit(index);
  }

  selectTab(index: number): void {
    this.selectedIndex.set(index);
  }
}
