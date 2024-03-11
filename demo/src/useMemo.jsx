import React, { useMemo, useState } from 'react';

const Table = () => {
  const data = useMemo(
    () => [
      { id: 1, name: 'Prathi', age: 22 },
      { id: 2, name: 'Mike', age: 15 },
      { id: 3, name: 'Senthil', age: 27 },
      { id: 4, name: 'Viji', age: 50 },
      { id: 5, name: 'Selvaraj', age: 55},
    ],
  );

  const totalAge = useMemo(() => {
    console.log('Calculating total age...');
    return data.reduce((acc, person) => acc + person.age, 0);
  }, []);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const extractRecord = (id) => {
    const selected = data.find((person) => person.id === id);
    setSelectedPerson(selected);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => extractRecord(person.id)}>
                  Extract
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Age: {totalAge}</p>

      {selectedPerson && (
        <div>
          <h2>Selected Person</h2>
          <p>ID: {selectedPerson.id}</p>
          <p>Name: {selectedPerson.name}</p>
          <p>Age: {selectedPerson.age}</p>
        </div>
      )}
    </div>
  );
};

export default Table;