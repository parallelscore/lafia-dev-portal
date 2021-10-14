import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addFavoriteData } from '../../actions/favorites';
// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit, handleDelete, addToFavorite) => {
  console.log(handleDelete);
  return [
    {
      title: 'ID',
      render: (rowData) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: 'Name',
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: 'Username',
      render: (rowData) => {
        return <span>{rowData.username}</span>;
      },
    },
    {
      title: 'Email',
      render: (rowData) => {
        return <span>{rowData.email}</span>;
      },
    },
    {
      title: 'Phone',
      render: (rowData) => {
        return <span>{rowData.phone}</span>;
      },
    },
    {
      title: 'Website',
      render: (rowData) => {
        return <span>{rowData.website}</span>;
      },
    },

    // {
    //   title: 'Marital Status',
    //   render: (rowData) => {
    //     return <span>{rowData.married}</span>;
    //   },
    // },
    {
      title: 'Delete',
      render: (rowData) => {
        return (
          <button
            className="btn btn-danger"
            onClick={() => handleEdit(rowData.id)}
          >
            Delete
          </button>
        );
      },
    },

    {
      title: 'Add To Favorites',
      render: (rowData) => {
        return (
          <div style={{ display: 'flex' }}>
            <button
              style={{ marginRight: '5px' }}
              className="btn btn-warning"
              // onClick={() => addFavoriteData(rowData)}
            >
              ❤️
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleEdit(rowData.id)}
            >
              Un❤️
            </button>
          </div>
        );
      },
    },
    {
      title: 'Add',
      render: (rowData) => {
        return (
          <Link to={`/add`} className="btn btn-primary">
            Add
          </Link>
        );
      },
    },
    {
      title: 'Edit',
      render: (rowData) => {
        return (
          <Link className="btn btn-secondary" to={`/edit/${rowData.id}`}>
            Edit
          </Link>
        );
      },
    },
  ];
};
