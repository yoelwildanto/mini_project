// This CodeSandbox is written by Masa Kudamatsu
// as a demo of the React code described in my blog post
// "How to customize the file upload button in React"
// available at: https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8?sk=84049c3c66edb56a84afe87ce4a4525c
// August 18, 2023

import { useState } from "react";
import { FileUploader } from "./FileUploader";
export default function App() {
  const [fileName, setFileName] = useState("");
  console.log("fileName");
  console.log(fileName);
  const handleFile = (file) => {
    setFileName(file.name);
  };
  return (
    <>
      <FileUploader handleFile={handleFile} />
      {fileName ? <p>Uploaded file: {fileName}</p> : null}
    </>
  );
}
