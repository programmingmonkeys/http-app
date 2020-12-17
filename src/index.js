import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY,
  release: 'mosh-course@' + process.env.npm_package_version,
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
