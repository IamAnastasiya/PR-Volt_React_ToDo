import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import store from './store/index'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
