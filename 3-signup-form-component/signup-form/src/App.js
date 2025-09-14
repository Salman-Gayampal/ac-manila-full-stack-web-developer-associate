import SignupForm from "./components/SignupForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    toast.success('Signup successful!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <SignupForm onSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  );
}

export default App;
