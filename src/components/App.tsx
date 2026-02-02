import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import AuthLibrary from "@/components/moodle/AuthLibrary";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Library" element={<AuthLibrary />} />
      </Routes>
    </Layout>
  );
};

export default App;
