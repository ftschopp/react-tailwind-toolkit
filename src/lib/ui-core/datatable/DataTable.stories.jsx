import React from 'react';
import DataTable from './DataTable.component';
import { withKnobs } from '@storybook/addon-knobs';
import namor from 'namor';

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
    emptyDataLabel: { control: 'text' },
    borderRounded: { control: 'boolean' },
  },
};

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export const Standard = args => {
  const newPerson = () => {
    const statusChance = Math.random();
    return {
      firstName: namor.generate({ words: 1, numbers: 0 }),
      lastName: namor.generate({ words: 1, numbers: 0 }),
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
    };
  };
  const makeData = (len = 200) => {
    return range(len).map(d => {
      return {
        ...newPerson(),
        children: range(10).map(newPerson),
      };
    });
  };

  return (
    <DataTable
      {...args}
      columns={[
        {
          Header: 'Nombre',
          accessor: 'firstName',
          minWidth: 250,
        },
        {
          Header: 'Apellido',
          accessor: 'lastName',
          minWidth: 250,
        },
        {
          Header: 'Edad',
          accessor: 'age',
          minWidth: 100,
        },
        {
          Header: 'visits',
          accessor: 'visits',
          minWidth: 100,
        },
        {
          Header: 'Progreso',
          accessor: 'progress',
          minWidth: 100,
        },
        {
          Header: 'Estado',
          accessor: 'status',
          minWidth: 140,
        },
      ]}
      data={makeData(285)}
    />
  );
};

export const WithOutData = args => (
  <DataTable
    {...args}
    columns={[
      {
        Header: 'Nombre',
        accessor: 'firstName',
        minWidth: 250,
      },
      {
        Header: 'Apellido',
        accessor: 'lastName',
        minWidth: 250,
      },
      {
        Header: 'Edad',
        accessor: 'age',
        minWidth: 100,
      },
      {
        Header: 'visits',
        accessor: 'visits',
        minWidth: 100,
      },
      {
        Header: 'Progreso',
        accessor: 'progress',
        minWidth: 100,
      },
      {
        Header: 'Estado',
        accessor: 'status',
        minWidth: 140,
      },
    ]}
    data={[]}
  />
);

export const WithLoadingData = args => (
  <DataTable
    {...args}
    loading={true}
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
