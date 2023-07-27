import React from 'react'
import { createRoot } from 'react-dom/client'

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app') as Element);
root.render(<h1>You can place your app here :)</h1>);
