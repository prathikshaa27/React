// Your React component file
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const NewComponent = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
   
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchData })(NewComponent);
