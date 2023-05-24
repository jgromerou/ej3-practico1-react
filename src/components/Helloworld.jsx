import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Helloworld = ({ name }) => {
  const [variable, setVariable] = useState('');
  return (
    <>
      <h1 className="display-3">
        Hello{' '}
        <span className="text-info">
          {name} <em className="text-success fw-bold">{variable}</em>
        </span>
      </h1>
      <Button
        variant="success"
        className="my-4"
        onClick={() => setVariable('(from changed state)!')}
      >
        Click Me!
      </Button>
    </>
  );
};

export default Helloworld;
