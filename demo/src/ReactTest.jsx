import React from 'react';
import ReactComponent from './ReactComponent';

test('rendering the component' ,()=>{
    render(<ReactComponent/>);
    const newElement = screen.getByText(/Hello this is prathi/i);
  expect(newElement).toBeInTheDocument();
});