import React from 'react';
import './../../../screens/auth/table.scss';
export const CustomTable = ({
  cols,
  data,
  bordered,
  hoverable,
  striped,
  isDark,
  handleDelete,
  addToFavorite,
}) => {
  return (
    <div class="table-responsive">
      <table
        style={{
          margin: '12px',
          borderRadius: '2rem 0',
          padding: '3rem',
        }}
        className={`table ${bordered ? 'table-bordered' : 'table-borderless'} ${
          hoverable && 'table-hover'
        } ${striped && 'table-striped'} ${isDark && 'table-dark'}`}
      >
        <thead className="tableu" style={{ borderRadius: '12px' }}>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ padding: '3rem' }}>
          {data.map((item, index) => (
            <tr key={index}>
              {cols.map((col, key) => (
                <>
                  {' '}
                  <td key={key}>{col.render(item)}</td>{' '}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
