import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateofBirth: "",
    profilePic: "",
    userName: "",
    password: "",
    confPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const isvalidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isvalidPassword = (password) => {
    const SymbolRegex = /[!@#$%!&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      SymbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  }

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!isvalidEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.dateofBirth) newErrors.dateofBirth = "Date of Birth is required.";
    if (!formData.profilePic) newErrors.profilePic = "Profile picture is required.";
    if (!formData.userName) newErrors.userName = "Username is required.";
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!isvalidPassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and contain at least 1 capital letter, 1 symbol, and 1 number.";
    }
    if (!formData.confPassword) {
      newErrors.confPassword = "Confirm Password is required.";
    } else if (formData.confPassword !== formData.password) {
      newErrors.confPassword = "Passwords must match.";
    }
    
    return Object.keys(newErrors).length === 0 ? null : newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted", formData);
      // Here you can add the logic to submit the form to your backend
      // Reset form or show success message if needed
    }
  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
    if (errors[name]) { // Clear error when changing the input
      setErrors({ ...errors, [name]: '' });
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfPasswordVisibility = () => {
    setShowConfPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Register</h1>
        <p className="text-center text-gray-600 mb-6">Welcome</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              name='firstName'
              value={formData.firstName}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter first name"
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              name='lastName'
              value={formData.lastName}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter last name"
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name='email'
              value={formData.email}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter email"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name='dateofBirth'
              value={formData.dateofBirth}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
            />
            {errors.dateofBirth && <p className="text-red-500 text-sm">{errors.dateofBirth}</p>}
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Add Your Profile Picture</label>
            <input
              type="file"
              name='profilePic'
              className="w-full border rounded-lg px-3 py-2 bg-gray-50"
              onChange={handleChange}
            />
            {errors.profilePic && <p className="text-red-500 text-sm">{errors.profilePic}</p>}
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name='userName'
              value={formData.userName}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Choose a username"
              onChange={handleChange}
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={formData.password}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter password"
                onChange={handleChange}
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute inset-y-0 right-3 flex items-center focus:outline-none"
              >
                {showPassword ? "🔒" : "👀"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfPassword ? "text" : "password"}
                name='confPassword'
                value={formData.confPassword}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Confirm password"
                onChange={handleChange}
              />
              <button 
                type="button" 
                onClick={toggleConfPasswordVisibility} 
                className="absolute inset-y-0 right-3 flex items-center focus:outline-none"
              >
                {showConfPassword ? "🔒" : "👀"}
              </button>
            </div>
            {errors.confPassword && <p className="text-red-500 text-sm">{errors.confPassword}</p>}
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;