import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from './redux/greetingSlice';

const Greeting = () => {
  const { messages, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return <h1>{messages}</h1>;
};
export default Greeting;
