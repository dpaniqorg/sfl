import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CaptainsService, CaptainsStore, TCaptain } from '@entities/captains';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'sfl-games-table',
  standalone: true,
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class GamesTableComponent {
  constructor(
    private _destroyRef: DestroyRef,
    private captainsStore: CaptainsStore
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnDestroy() {}

  ngOnInit() {
    this.captainsStore.captains$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((captains) => {
        this.dataSource.data.push(...captains);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  readonly dataSource = new MatTableDataSource<TCaptain>([]);
  readonly displayedColumns: (keyof TCaptain)[] = [
    'avatar',
    'name',
    'surname',
    'nickname',

    'totalGames',
    'wonGames',
    'lostGames',
    'draws',

    'maxWinStreak',
    'maxLostStreak',

    // TBC
    // playsForA: number
    // playsForB: number

    // season[number]: + / - points
    // season[number]: + / - points
    // season[number]: + / - points
  ];
}
