import { DashboardPageStoreType } from './DashboardPage.store';
import { observable } from 'mobx';

export const ChartWidgetStore = (dashboardPageStore: DashboardPageStoreType) =>
  observable({
    isReversed: false,

    get chartData(): string {
      const items = this.isReversed ? dashboardPageStore.employees.slice().reverse() : dashboardPageStore.employees;

      return items.join(' | ');
    },

    toggleList(): void {
      this.isReversed = !this.isReversed;
    },
  });

export interface ChartWidgetStoreType extends ReturnType<typeof ChartWidgetStore> {}
