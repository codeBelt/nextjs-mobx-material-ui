import { observable } from 'mobx';
import { ChartWidgetStoreType, ChartWidgetStore } from './ChartWidget.store';
import { TableWidgetStoreType, TableWidgetStore } from './TableWidget.store';
import { getEmployeesRequest, getProjectRequest } from './services';

export const DashboardPageStore = () => {
  const store = observable({
    isInitialLoadComplete: false,
    employees: [] as string[],
    projects: [] as string[],
    name: 'Robert',

    chartWidgetStore: (null as unknown) as ChartWidgetStoreType,
    tableWidgetStore: (null as unknown) as TableWidgetStoreType,

    async init() {
      await Promise.all([this.loadEmployees(), this.loadProjects()]);

      this.isInitialLoadComplete = true;
    },

    async loadEmployees() {
      const response = await getEmployeesRequest();

      this.employees = response;
    },

    async loadProjects() {
      const response = await getProjectRequest();

      this.projects = response;
    },
  });

  store.chartWidgetStore = ChartWidgetStore(store);
  store.tableWidgetStore = TableWidgetStore(store);

  return store;
};

export interface DashboardPageStoreType extends ReturnType<typeof DashboardPageStore> {}
