import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import { Avatar, Image } from 'antd';
import { Popover, Button } from 'antd';
import { Link } from 'react-router-dom';

const content = (
  <div>
    <div>
      <Link to="#">View Details</Link>
    </div>
    <div>
      <Link to="#">Delete</Link>
    </div>
  </div>
);
const columns = [
  {
    title: ' ',
    dataIndex: 'image',
    render: () => (
      <div style={{ width: '5px' }}>
        <img
          alt="myImage"
          style={{ width: '30px' }}
          // replace here with dynamically mapped image
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </div>
    ),
  },

  {
    title: 'Client Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text} </a>,
  },
  {
    title: 'Client URL',
    dataIndex: 'clientUrl',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },

  {
    title: 'Key Status',
    dataIndex: 'name',
    render: (text: string) => <button> Disabled</button>,
  },

  {
    title: ' ',
    dataIndex: 'address',
    render: (text: string) => (
      <Popover placement="bottom" content={content} title="">
        <Button type="primary">H</Button>
      </Popover>
    ),
  },
];

interface DataType {
  key: React.Key;
  name: string;
  clientUrl: string;
  address: string;
  email: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'Kimberly Jones',
    clientUrl: 'http://urlsample.com',
    address: 'New York No. 1 Lake Park',
    email: 'email@email.com',
  },
  {
    key: '2',
    name: 'Kimberly Jones',
    clientUrl: 'http://urlsample.com',
    address: 'London No. 1 Lake Park',
    email: 'email@email.com',
  },
  {
    key: '3',
    name: 'Kimberly Jones',
    clientUrl: 'http://urlsample.com',
    address: 'Sidney No. 1 Lake Park',
    email: 'email@email.com',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const CustomTable = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox'
  );

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CustomTable;
