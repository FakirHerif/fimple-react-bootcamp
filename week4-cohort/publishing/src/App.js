import React from 'react';
import Button from "./components/Button";

function App() {
  return (
<>
<Button type="primary" text="Primary Button"/>
<Button type="default" text="Default Button"/>
<Button type="dashed" text="Dashed Button"/>
<Button type="text" text="Text Button"/>
<Button type="link" text="Link Button"/>
</>
  );
}

export default App;
