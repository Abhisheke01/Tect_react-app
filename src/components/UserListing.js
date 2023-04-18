import React from 'react'

function UserListing() {

    function fetchData() {
        fetch("https://reqres.in/api/users?page=2")
          .then(response => response.json())
          .then(data => {
            console.log(data.data);
          });
      }


  return (
    <><button onClick={fetchData}>Show Data</button></>
   
  )
}

export default UserListing