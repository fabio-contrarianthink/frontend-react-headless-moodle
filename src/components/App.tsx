import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import AuthLibrary from "@/components/moodle/AuthLibrary";
import TemplateList from "@/components/atlas/TemplateList";
import Profile from "@/pages/Profile";
import { withAuthenticationRequired } from "@/middlewares/withAuthenticationRequired";

const templateMockEntries = [
  {
    title: "Template 1",
    description: "Description for Template 1",
    url: "https://example.com/template1",
  },
  {
    title: "Template 2",
    description: "Description for Template 2",
    url: "https://example.com/template2",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 1",
    description: "Description for Template 1",
    url: "https://example.com/template1",
  },
  {
    title: "Template 2",
    description: "Description for Template 2",
    url: "https://example.com/template2",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 1",
    description: "Description for Template 1",
    url: "https://example.com/template1",
  },
  {
    title: "Template 2",
    description: "Description for Template 2",
    url: "https://example.com/template2",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 1",
    description: "Description for Template 1",
    url: "https://example.com/template1",
  },
  {
    title: "Template 2",
    description: "Description for Template 2",
    url: "https://example.com/template2",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
  {
    title: "Template 3",
    description: "Description for Template 3",
    url: "https://example.com/template3",
  },
];

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<AuthLibrary />} />
        <Route
          path="/templates"
          element={<TemplateList entries={templateMockEntries} />}
        />
        {/* Wrap Profile with authentication HOC */}
        <Route
          path="/profile"
          element={React.createElement(withAuthenticationRequired(Profile))}
        />
      </Routes>
    </Layout>
  );
};

export default App;
