import React from 'react'
import App from '../../components-17-07-2026/useEffect Hook-10-08-2026/App'
import CleanupExample from '../../components-17-07-2026/useEffect Hook-10-08-2026/CleanupExample'
import EmptyDependency from '../../components-17-07-2026/useEffect Hook-10-08-2026/EmptyDependency'
import NoDependency from '../../components-17-07-2026/useEffect Hook-10-08-2026/NoDependency'
import WithDependency from '../../components-17-07-2026/useEffect Hook-10-08-2026/WithDependency'




function UseEffectPage() {
  return (
    <div>
        <App/>
        <CleanupExample/>
        <EmptyDependency/>
        <NoDependency/>
        <WithDependency/>
        
    
    </div>
  )
}

export default UseEffectPage