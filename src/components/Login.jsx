import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setUsernameAction } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, [localStorage.getItem('user'), navigate]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
          dispatch(setUsernameAction(inputValue));
          localStorage.setItem('user', inputValue);
        }
      }}
    >
      <Form.Control
        placeholder='Effettua il login'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className='d-flex justify-content-center mt-3'>
        <button className='btn btn-success' type='submit'>
          Login
        </button>
      </div>
    </Form>
  );
};

export default Login;
