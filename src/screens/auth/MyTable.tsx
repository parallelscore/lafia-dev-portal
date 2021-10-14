import React from 'react';
import { CustomTable } from '../../components/forms/table/CustomTable';
import { tableConstants } from '../../components/forms/table/TableConstants';
import { Table } from 'react-bootstrap';
import './table.scss';
const MyTable = () => {
  const myData = [
    {
      name: 'Ben',
      email: 'adsd',
      maritalStatus: true,
      id: 1,
      phone: '004040',
      website: 'hdhsh',
    },
  ];

  return (
    <div>
      <CustomTable
        cols={tableConstants()}
        data={myData}
        bordered
        hoverable={undefined}
        striped={undefined}
        isDark={undefined}
        handleDelete={undefined}
        addToFavorite={undefined}
      />

      {/* <Table striped bordered hover size="lg">
        <thead className="tableu" style={{ padding: '13rem' }}>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  );
};
//Using the table
//  <CustomTable
//    cols={tableConstants(handleDelete)}
//    handleDelete={handleDelete}
//    addToFavorite={addToFavorite}
//    data={filteredUsers}
//    bordered
//    striped
//    hoverable
//  />;

export default MyTable;

// import React, { useState } from 'react';
// import { Table, Radio, Divider } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     render: (text: string) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
// ];

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Disabled User',
//     age: 99,
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

// rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       'selectedRows: ',
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record: DataType) => ({
//     disabled: record.name === 'Disabled User', // Column configuration not to be checked
//     name: record.name,
//   }),
// };

// const MyTable = () => {
//   const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
//     'checkbox'
//   );

//   return (
//     <div>
//       <Radio.Group
//         onChange={({ target: { value } }) => {
//           setSelectionType(value);
//         }}
//         value={selectionType}
//       >
//         <Radio value="checkbox">Checkbox</Radio>
//         <Radio value="radio">radio</Radio>
//       </Radio.Group>

//       <Divider />

//       <Table
//         style={{ padding: '10rem' }}
//         rowSelection={{
//           type: selectionType,
//           ...rowSelection,
//         }}
//         columns={columns}
//         dataSource={data}
//       />
//     </div>
//   );
// };

// export default MyTable;
