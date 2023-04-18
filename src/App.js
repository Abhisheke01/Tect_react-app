import logo from './logo.svg';
import './App.css';
import UserListing from './components/UserListing';

function App() {
  var student1= {name:"smit", age:21, city:"mumbai"}

  function showData() {
    alert("Patient Management Database");
  }



  return (
    <>
      <h1>From App Component</h1>
      <UserListing/>
    </>
  );
}

export default App;
