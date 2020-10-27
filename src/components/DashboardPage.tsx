import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DashboardPageStore, DashboardPageStoreType } from './DashboardPage.store';

interface IProps {
  localStore: DashboardPageStoreType;
}

export const Name: React.FC<IProps> = observer((props) => {
  return <h1>{props.localStore.name}&apos;s Dashboard</h1>;
});

export const ChartWidget: React.FC<IProps> = observer((props) => {
  return (
    <div>
      <dl>
        <dt>
          <h3>Chart Widget</h3>
        </dt>
        <dd>{props.localStore.chartWidgetStore!.chartData}</dd>
      </dl>
      <button onClick={() => props.localStore.chartWidgetStore!.toggleList()}>Toggle</button>
    </div>
  );
});

export const TableWidget: React.FC<IProps> = observer((props) => {
  return (
    <div>
      <dl>
        <dt>
          <h3>Table Widget</h3>
        </dt>
        <dd>{props.localStore.tableWidgetStore!.tableData}</dd>
      </dl>
      <button onClick={() => props.localStore.tableWidgetStore!.toggleCase()}>Toggle</button>
    </div>
  );
});

export const DashboardPage: React.FC = observer((props) => {
  const [localStore] = useState(DashboardPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  if (!localStore.isInitialLoadComplete) {
    return <div>loading...</div>;
  }

  return (
    <main>
      <Name localStore={localStore} />
      <hr />
      <div>
        <ChartWidget localStore={localStore} />
        <TableWidget localStore={localStore} />
      </div>
    </main>
  );
});
