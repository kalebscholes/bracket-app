import ReactGA from 'react-ga'

const trackerId = process.env.APP_GA_TRACKING_ID
ReactGA.initialize(trackerId)
ReactGA.pageview(window.location.pathname + window.location.search)

export default ReactGA
