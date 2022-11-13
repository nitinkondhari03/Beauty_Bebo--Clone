import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUserById(id) {
  return fetch(
    // url
    `https://reqres.in/api/users/${id}`
  ).then((res) => res.json());
}

function SingleUser() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  console.log(params);
  // https://reqres.in/api/users/:id

  useEffect(() => {
    setLoading(true);
    getUserById(params.user_id)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h4>Loading</h4>;
  }
  return (
    <div>
      <h1>SingleUser</h1>
      <h2>User ID: {params.user_id}</h2>
      <div>First Name: {data.first_name}</div>
      <div>Last Name: {data.last_name}</div>
      <div>Email: {data.email}</div>
      <img src={data.avatar} alt={data.user_id} width="100px" />
      <br />
      <Link to="/users"> Go Back </Link>
    </div>
  );
}

export default SingleUser;
