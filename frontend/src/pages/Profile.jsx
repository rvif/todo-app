import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [isAuthenticated]);

  return loading ? (
    <Loader />
  ) : isAuthenticated ? (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  ) : (
    <div className="pwease">
      <h2>Please login first</h2>
    </div>
  );
};

export default Profile;
