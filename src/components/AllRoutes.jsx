import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";
// import { QuestionGeneratorForm } from "../pages/QuetionGenerator";
import { About } from "../pages/About";
import { QuestionForm } from "./QuetionForm";
import { AssessmentTool } from "../pages/AssessmentTool";
import { ContentTool } from "../pages/ContentTool";
import { MultilingualContentTool } from "../pages/MultilingualContentTool";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/quetiongenerator" element={<QuestionGeneratorForm />} /> */}
      <Route path="/AssessmentTool" element={<AssessmentTool />} />
      <Route path="/ContentTool" element={<ContentTool />} />
      <Route path="/MultilingualContentTool" element={<MultilingualContentTool />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route
        path="/questionform"
        element={
          <ProtectedRoute>
            <QuestionForm />
           </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export { AllRoutes };
