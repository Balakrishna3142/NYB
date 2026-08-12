import React from 'react'
import App from '../../components-17-07-2026/loading states empty states-10-08-2026/App'
import EmptyState from '../../components-17-07-2026/loading states empty states-10-08-2026/EmptyState'
import LoadingState from '../../components-17-07-2026/loading states empty states-10-08-2026/LoadingState'
import StatesPage from '../../components-17-07-2026/loading states empty states-10-08-2026/StatesPage'


function LoadingPage() {
  return (
    <div>
        <App/>
        <EmptyState/>
        <LoadingState/>
        <StatesPage/>
    </div>
  )
}

export default LoadingPage