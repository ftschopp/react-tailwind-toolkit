import React from 'react';
import DataTable from './DataTable.component';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ui-core/DataTable',
  component: DataTable,
  decorators: [withKnobs],
  argTypes: {
    className: { control: 'text' },
    name: { control: 'text' },
    columns: { control: 'text' },
    data: { control: 'text' },
    loading: { control: 'boolean' },
  },
};

export const Standard = (args) => (
  <DataTable
    columns={[
      {
        Header: 'Nombre',
        accessor: 'friendlyName',
        width: 250,
      },
      {
        Header: 'Fabricante',
        accessor: 'manufacturer',
        width: 150,
      },
      {
        Header: 'Modelo',
        accessor: 'model',
        width: 140,
      },
    ]}
    data={[
      {
        friendlyName: 'Computer HP ABSX',
        manufacturer: 'HP',
        model: ' ABSX-34123',
      },
      {
        friendlyName: 'Computer Lenovo',
        manufacturer: 'Lenovo',
        model: 'N-345',
      },
      {
        friendlyName: 'Macbook pro',
        manufacturer: 'Apple',
        model: 'Pro late 2012',
      },
    ]}
  />
);

export const WithOutData = (args) => (
  <DataTable
    columns={[
      {
        Header: 'Nombre',
        accessor: 'friendlyName',
        width: 250,
      },
      {
        Header: 'Fabricante',
        accessor: 'manufacturer',
        width: 150,
      },
      {
        Header: 'Modelo',
        accessor: 'model',
        width: 140,
      },
    ]}
    data={[]}
  />
);
