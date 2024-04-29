
// Signup.js
// import React, { useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';



// export default function Signup() {
//   let navigate=useNavigate()

//   const [credentials, setCredentials] = useState({ name: '', email: '', password: '', location: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/api/createuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const json = await response.json();
//       console.log(json);

//       if (!json.success) {
//         alert('Enter Valid Credentials');
//       }
//       if(json.success){
//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"));
//         navigate("/")
//       }
      
//     } catch (error) {
//       console.error('Error during signup:', error);
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <div className="center">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Address
//             </label>
//             <input type="text" className="form-control" name="location" value={credentials.location} onChange={onChange} />
//           </div>

//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';



export default function Signup() {
  let navigate=useNavigate()

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert('Enter Valid Credentials');
      }
      if(json.success){
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/")
      }
      
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="center">
  <h1>Signup</h1>
  <form onSubmit={handleSubmit}>
    <div className="txt_field">
      <input type="text" name="name" value={credentials.name} onChange={onChange} required />
      <span></span>
      <label>Name</label>
    </div>
    <div className="txt_field">
      <input type="email" name="email" value={credentials.email} onChange={onChange} required />
      <span></span>
      <label>Email address</label>
    </div>
    <div className="txt_field">
      <input type="password" name="password" value={credentials.password} onChange={onChange} required />
      <span></span>
      <label>Password</label>
    </div>
    <div className="txt_field">
      <input type="text" name="location" value={credentials.location} onChange={onChange} required />
      <span></span>
      <label>Address</label>
    </div>
    <input type="submit" value="Signup" />
    <div className="signup_link">
      <span>Already a member?</span>
      <Link to="/login">Login</Link>
    </div>
  </form>
</div>
    </>
  );
}





