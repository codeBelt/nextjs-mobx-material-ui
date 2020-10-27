import { DashboardPageStoreType } from './DashboardPage.store';
import { observable } from 'mobx';

export const TableWidgetStore = (dashboardPageStore: DashboardPageStoreType) =>
  observable({
    isUpperCase: false,

    get tableData(): string {
      const value = [...dashboardPageStore.projects, ...dashboardPageStore.employees].join(' ~ ');

      return this.isUpperCase ? value.toUpperCase() : value;
    },

    toggleCase(): void {
      this.isUpperCase = !this.isUpperCase;
    },
  });

export interface TableWidgetStoreType extends ReturnType<typeof TableWidgetStore> {}
