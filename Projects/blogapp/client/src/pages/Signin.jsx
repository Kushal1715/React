import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Validate form fields
    if (!formData.email || !formData.password) {
      setErrorMsg("Please fill all the fields");
      return; // Prevent submission if validation fails
    }

    try {
      setLoading(true); // Set loading state
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check if response is ok
      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.message || "Something went wrong");
        return;
      }

      const data = await res.json();
      if (data.success === false) {
        setErrorMsg(data.message);
      } else {
        // Handle successful signup (e.g., redirect, show success message, etc.)
        setErrorMsg(null); // Clear any previous error messages
        console.log("Signup successful:", data);
        formData.email = "";
        formData.password = "";
        navigate("/");
      }
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen mt-20 px-4">
      <div className="flex flex-col md:flex-row md:items-center max-w-3xl mx-auto gap-4">
        {/* Left Side */}
        <div className="text-4xl flex-1">
          <Link to="/" className="font-bold dark:text-white">
            <span className="px-2 py-1 font-bold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Kushal's
            </span>
            Blog
          </Link>
          <p className="text-base mt-5">
            This is a blog application project made using MERN. You can sign up
            with your email and password or using Google.
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                value={formData.email} // Controlled component
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                value={formData.password} // Controlled component
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="mt-3 w-full"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <>
                  <Spinner /> <span>Loading...</span>{" "}
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
          <div className="mt-4 flex gap-2">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </div>
          <div>{errorMsg && <Alert color="failure">{errorMsg}</Alert>}</div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
