import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ComponentsPage from './pages/Components_22-07-2026/ComponentsPage'
import PropsPage from './pages/Props/PropsPage'
import JSXPage from './pages/JSXtask/JSXPage'
// import StatePage from './pages/state/StatePage'
import ParentandChildPage from './pages/Parent and Child_(23-07-2026)/ParentandChildPage'
import ComponetHierarchyPage from './pages/component hierarchy-23-07-2026/ComponetHierarchyPage'
import DummyPage from './pages/Dummy_24-07-2026/DummyPage'
import NestingMultipleChildComponentsPage from './pages/nesting multiple child components28-07-2026/NestingMultipleChildComponentsPage'
import OrganizingComponentsPage from './pages/Organizing Components-28-07-2026/OrganizingComponentsPage'
import UseStatePage from './pages/UseState-28-07-2026/UseStatePage'
import LocalStateinReactPage from './pages/Local State in React-30-07-2026/LocalStateinReactPage'
import GlobalStatePage from './pages/GlobalState-30-07-2026/GlobalStatePage'
import ContextAPIPage from './pages/ContextAPI/ContextAPIPage'
import LocalVsGlobalStatePage from './pages/LocalVsGlobal-31-07-2026/LocalVsGlobalStatePage'
import AppContext, { UserContext } from './components-17-07-2026/ContextAPI-31-07-2026/AppContext'
import MiniAssignmentPage from './pages/Assignment-31-07-2026/MiniAssignmentPage'
import Home from './pages/Using Fetch API-03-08-2026/HomePage'
import UsingAxiousPage from './pages/API  Using Axios/UsingAxiousPage'
import AwaitApiPage from './pages/Async/Await with API calls-04-08-2026/Async/AwaitApiPage'
import HandlingPage from './pages/ErrorHandling-04-08-2026/HandlingPage'
import ApiIntegrationPage from './pages/APIIntegrationAssignment-04-08-2026/ApiIntegrationPage'
import ProjectPage from './pages/MiniProject-04-08-2026/ProjectPage'
import GsManagementPage from './pages/GlobalStateManagement-05-08-2026/GsManagementPage'
import DrillingsPage from './pages/PropsDrillings-05-08-2026/DrillingsPage'
import ApiPage from './pages/ContextApi2-05-08-2026/ApiPage'
import ReduxSManagementPage from './pages/ReduxStateManagement-05-08-2026/ReduxSManagementPage'
import ArchitecturePage from './pages/ReduxArchitecture-05-08-2026/ArchitecturePage'
import ReduxStorPage from './pages/ReduxStor&Reducer-05-08-2026/ReduxStorPage'
import ActionandDispatchPage from './pages/Action&Dispatch-05-08-2026/ActionandDispatchPage'
import ReduxToolkitPage from './pages/ReduxToolkit-05-08-2026/ReduxToolkitPage'
import CounterPage from './pages/CounterAndUseReducer-06-08-2026/CounterPage'
import ReducerPage from './pages/UseReducer-06-08-2026/ReducerPage'
import { CounterContext } from './components-17-07-2026/Context API-06-08-2026/CounterContext'
import ComponentPage from './pages/Components-07-08-2026/ComponentPage'
import UseStateHookPage from './pages/UseStateHook-07-08-2026/UseStateHookPage'
import HandllingPage from './pages/EventHandlling-07-08-2026/HandllingPage'
import FunctionalPage from './pages/FunctionalComponentsvs ClassComponents-07-08-2026/FunctionalPage'
import ContextApiPage from './pages/ContextAPIvsReduxvsuseReducer-07-08-2026/ContextApiPage'
import FetchPage from './pages/Fetch API vs Axios-07-08-2026/FetchPage'
import ConditionalRenderingPage from './pages/ConditionalRendering-07-08-2026/RenderingPage'
import ContextCounterPage from './pages/Context Api-06-08-2026/ApiPage'
import ContextImplementationPage from './pages/ContextAPIImplementation-31-07-2026/ContextAPIPages'
import LocalStatePage from './pages/LocalState-23-07-2026/LocalState'
import ReduxMiniProjectPage from './pages/MiniProject-06-08-2026/ProjectPage'
import PropsExercisePage from './pages/Props-07-08-2026/PropsPage'
import PropsVsStatePage from './pages/Propsv/sState-07-08-2026/PropsPage'
import StateAndReducerPage from './pages/UseState&UseReduser-06-08-2026/UseStatePage'
import LearningDashboard from './pages/LearningDashboard'
import ReduxIntroductionPage from './pages/ReduxIntroduction-31-07-2026/ReduxIntroductionPage'
import ConditionalPage from './pages/conditional rendering-10-08-2026/ConditionalPage'
import ConditionalRendering from './components-17-07-2026/Implementconditionalrendering-10-08-2026/ConditionalRendering'
import ShowHidePage from './pages/Show and Hide-10-08-2026/ShowHidePage'
import RolesPage from './pages/roles and authentication-10-08-2026/RolesPage'
import LoadingPage from './pages/loading states empty states-10-08-2026/LoadingPage'
import MiniPractcePage from './pages/Login/Logout component-10-08-2026/MiniPractcePage'
import UseEffectPage from './pages/UseEffect Hook-10-08-2026/UseEffectPage'
import ApiReactPage from './pages/Api Calls in React-10-08-2026/ApiReactPage'
import ControlledPage from './pages/controlled components-10-08-2026/ControlledPage'
import HandlinputPage from './pages/Handlinputdynamically-10-08-2026/HandlinputPage'
import LoginPage from './components-17-07-2026/controlled components-10-08-2026/LoginPage'
import DfhPage from './pages/ImplementDFH-10-08-2026/DfhPage'
import ValidationPage from './pages/Form Validation-11-08-2026/ValidationPage'
import SinglePage from './pages/SingleChangeHandler-11-08-2026/SinglePage'
import ErrorsPage from './pages/Display FormErrorsDynamically-11-08-2026/ErrorsPage'
import MiniPage from './pages/Registration Form-11-08-2026/MiniPage'
import HocPage from './pages/Hoc-11-08-2026/HocPage'
import ReusablePage from './pages/ReusableHoc-11-08-2026/ReusablePage'
import AutenticationPage from './pages/Autentication Hoc-11-08-2026/AutenticationPage'
import AuthorizationPage from './pages/AuthorizationHoc-11-08-2026/AuthorizationPage'
import HhcPage from './pages/HOCs with Hooks Component-11-08-2026/HhcPage'
import CasesPage from './pages/Use cases of Hoc-11-08-2026/CasesPage'
import RevisionPage from './pages/Complet Revision-11-08-2026/RevisionPage'
import FormPage from './pages/Form Validation-12-08-2026/FormPage'
import MultiplePage from './pages/Multiple Input Fields Using One Handler/MultiplePage'
import ImplementationPage from './pages/Implementation Patterns-12-08-2026/ImplementationPage'
import GetPage from './pages/GET — Read Data-12-08-2026/GetPage'
import PutPage from './pages/PUT — Update Entire Data-12-08-2026/PutPage'
import DeletePage from './pages/DELETE-12-08-2026/DeletePage'
import PostPage from './pages/Post-12-08-2026/PostPage'
import MapPage from './pages/Mapmethod-12-08-2026/MapPage'
import NormalPage from './pages/Normal Component-12-08-2026/NormalPage'
import ShallowPage from './pages/Shallow Comparison-12-08-2026/ShallowPage'
import PracticalPage from './pages/Practical-12-08-2026/PracticalPage'
import ReactPage from './pages/React Fragments-13-08-2026/ReactPage'
import ExamlPage from './pages/ReactExampl-13-08-2026/ExamlPage'
import UsingPage from './pages/UsingFragmentshorthand/UsingPage'
import AvoidingPage from './pages/Avoiding Unnecessary/AvoidingPage'
//port CustomPage from './pages/Custom Hook-13-08-2026/CustomPage'
import ReusaPage from './pages/ReusCustom Hooks-13-08-2026/ReusaPage'
import CustomPage from './pages/ReusableCustom Hook-13-08-2026/CustomPage'
import ApiCallsPage from './pages/Custom Hook for API Calls-13-08-2026/ApiCallsPage'
import ReuseCustomPage from './pages/Reuse Custom Hooks-13-08-2026/ReuseCustomPage'
import PurePage from './pages/Pure Components-13-08-2026/PurePage'
import MemoPage from './pages/UseMemo-15-08-2026/MemoPage'
import CallbackPage from './pages/useCallback-15-08-2026/CallbackPage'
import ListPage from './pages/List Rendering-16-08-2026/ListPage'
import DestructuringPage from './pages/Destructuring-16-08-2026/DestructuringPage'
import LazyPage from './pages/Lazy Loading-16-08-2026/LazyPage'
import BrowserPage from './pages/Browser Routing-16-082026/BrowserPage'
import NestedPage from './pages/Nested Routing-16-08-2026/NestedPage'
import DynamicPage from './pages/Dynamic Routing-16-08-2026/DynamicPage'
import ParametersPage from './pages/Route Parameters-16-08-2026/ParametersPage'
import NavigationPage from './pages/Navigation-16-08-2026/NavigationPage'
import RoutePage from './pages/Protected Routes-16-08-2026/RoutePage'
import FoundPage from './pages/404 (Not Found) Page-16-08-2026/FoundPage'
import PracticePage from './pages/Mini Practice3-16-08-2026/PracticePage'
import WebpackPage from './pages/Webpack-16-08-2026/WebpackPage'
import MiniProjectPage from './pages/MiniProject-16-08-2026/MiniProjectPage'
import BablePage from './pages/Babel-16-08-2026/BablePage'
import AllConceptsPage from './pages/Revise all concepts-16-08-2026/AllConceptsPage'
import FinalPage from './pages/Final Mini Project-16-08-2026/FinalPage'
import ApplicationPage from './pages/ReactApplication-16-07-2026/ApplicationPage'
import RoutingPage from './pages/Routing-16-08-2026/RoutingPage'
import StudentPage from './pages/MiniStudent Management-17-08-2026/StudentPage'
import FormPage1 from './pages/Form Validation-17-08-2026/FormPage1'
import ApiCallPage from './pages/API Calls-18-08-2026/ApiCallPage'
import FetchAxiosPage from './pages/Fetch Axios Examples-18-08-2026/FetchAxiosPage'
import QueryPage from './pages/Query Parameters-18-08-2026/QueryPage'
import ErrorPage from './pages/Error Handling-18-08-2026/ErrorPage'
import LoadingStatesPage from './pages/Loading States-18-08-2026/LoadingStatesPage'
import ResponsePage from './pages/API Response Handling-18-08-2026/ResponsePage'
import IntegratePage from './pages/Integrate  API-18-08-2026/IntegratePage'
import APIPage from './pages/Context API/APIPage'
import UseReducerPage from './pages/useReducer/UseReducerPage'
import GlobalPage from './pages/Global State Management/GlobalPage'
import ApiReduxPage from './pages/Context API vs Redux/ApiReduxPage'
import ReactMemoPage from './pages/React.memo/ReactMemoPage'
import SplittingPage from './pages/Code Splitting/SplittingPage'
import SmallProjectPage from './pages/small Project4/SmallProjectPage'
import ProtectedPage from './pages/Protected Routes/ProtectedPage'
//import ToolkitPage from './pages/Redux Toolkit/ToolkitPage'//
//import ResabilityPage from './pages/Reusability-16-08-2026/ResabilityPage'
//import StatePage from './pages/State Management-16-08-2026/StatePage'








const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    {/* <Route path='/' element={<LearningDashboard/>}/> */}
    <Route path='/components' element={<ComponentsPage/>}/>
    <Route path='/props' element={<PropsPage/>}/>
    <Route path='/jsx' element={<JSXPage/>}/>
    {/* <Route path='/state' element={<StatePage/>}/> */}
    <Route path='/jsx1' element={<ParentandChildPage/>}/>
    <Route path='/parent'element={<ComponetHierarchyPage/>}/>
    <Route path='/dummytwo' element={<DummyPage/>}/>
    <Route path='/nesting' element={<NestingMultipleChildComponentsPage/>}/>
    <Route path='/organizing' element={<OrganizingComponentsPage/>}/>
    <Route path='/state' element={<UseStatePage/>}/>
    <Route path='/local-state' element={<LocalStateinReactPage/>}/>
    <Route path='/global-state' element={<GlobalStatePage/>}/>
    <Route path='/context-api' element={<ContextAPIPage/>}/>
    <Route path='/local-vs-global' element={<LocalVsGlobalStatePage/>}/>
    <Route path='/context-implementation' element={<ContextImplementationPage/>}/>
    <Route path='/mini-assignment' element={<MiniAssignmentPage/>}/>
    <Route path='/fetch-users' element={<Home/>}/>
    <Route path='/axios' element={<UsingAxiousPage/>}/>
    <Route path='/async-api' element={<AwaitApiPage/>}/>
    <Route path='/error-handling' element={<HandlingPage/>}/>
    <Route path='/api-integration' element={<ApiIntegrationPage/>}/>
    <Route path='/mini-project' element={<ProjectPage/>}/>
    <Route path='/global-state-management' element={<GsManagementPage/>}/>
    <Route path='/props-drilling' element={<DrillingsPage/>}/>
    <Route path='/theme-context' element={<ApiPage/>}/>
    <Route path='/redux-state' element={<ReduxSManagementPage/>}/>
    <Route path='/redux-introduction' element={<ReduxIntroductionPage/>}/>
    <Route path='/redux-architecture' element={<ArchitecturePage/>}/>
    <Route path='/redux-store' element={<ReduxStorPage/>}/>
    <Route path='/redux-actions' element={<ActionandDispatchPage/>}/>
    <Route path='/redux-toolkit' element={<ReduxToolkitPage/>}/>
    <Route path='/state-and-reducer' element={<StateAndReducerPage/>}/>
    <Route path='/reducer-counter' element={<CounterPage/>}/>
    <Route path='/use-reducer' element={<ReducerPage/>}/>
    <Route path='/context-counter' element={<ContextCounterPage/>}/>
    <Route path='/redux-mini-project' element={<ReduxMiniProjectPage/>}/>
    <Route path='/component-basics' element={<ComponentPage/>}/>
    <Route path='/use-state-hook' element={<UseStateHookPage/>}/>
    <Route path='/event-handling' element={<HandllingPage/>}/>
    <Route path='/functional-vs-class' element={<FunctionalPage/>}/>
    <Route path='/props-exercise' element={<PropsExercisePage/>}/>
    <Route path='/props-vs-state' element={<PropsVsStatePage/>}/>
    <Route path='/context-redux-reducer' element={<ContextApiPage/>}/>
    <Route path='/fetch-vs-axios' element={<FetchPage/>}/>
    <Route path='/conditional-rendering' element={<ConditionalRenderingPage/>}/>
    <Route path='/local-state-practice' element={<LocalStatePage/>}/>
    <Route path='/conditional-rendering' element={<ConditionalPage/>}/>
    <Route path='/implement-conditional-rendering-' element={<ConditionalRendering/>}/>
    <Route path='/show-hide' element={<ShowHidePage/>}/>
    <Route path='/roles-' element={<RolesPage/>}/>
    <Route path='/States' element={<LoadingPage/>}/>
    <Route path='/login-logout' element={<MiniPractcePage/>}/>
    <Route path='/Useeffect-hook'element={<UseEffectPage/>}/>
    <Route path='/api' element={<ApiReactPage/>}/>
    <Route path='/Controlled'element={<ControlledPage/>}/>
    <Route path='/Handlinput'element={<HandlinputPage/>}/>
     <Route path='/login'element={<LoginPage/>} />
     <Route path='/Dfh'element={<DfhPage/>}/>
     <Route path='/Form'element={<ValidationPage/>}/>
     <Route path='/Single'element={<SinglePage/>}/>
     <Route path='/Error'element={<ErrorsPage/>}/>
     <Route path='/Mini'element={<MiniPage/>}/>
<Route path='/Hoc'element={<HocPage/>}/>
<Route path='/Reusable'element={<ReusablePage/>}/>
<Route path='/Autenticat'element={<AutenticationPage/>}/>
<Route path='/Auterization'element={<AuthorizationPage/>}/>
<Route path='/Hhc'element={<HhcPage/>}/>
<Route path='/Cases'element={<CasesPage/>}/>
<Route path='/Mini'element={<MiniPage/>}/>
<Route path='/Revision'element={<RevisionPage/>}/>
<Route path='/form'element={<FormPage/>}/>
<Route path='/Multiple'element={<MultiplePage/>}/>
<Route path='/Implement'element={<ImplementationPage/>}/>
<Route path='/api'element={<FetchPage/>}/>
<Route path='/get'element={<GetPage/>}/>
<Route path='/post'element={<PutPage/>}/>
<Route path='/put'element={<PutPage/>}/>
<Route path='/delete'element={<DeletePage/>}/>
<Route path='/post'element={<PostPage/>}/>
<Route path='/map'element={<MapPage/>}/>
<Route path='/Effect'element={<useEffectPage/>}/>
<Route path='/Normal'element={<NormalPage/>}/>
<Route path='/Shallow'element={<ShallowPage/>}/>
<Route path='/Normal'element={<NormalPage/>}/>
<Route path='/Exampl'element={<ExamlPage/>}/>
<Route path='/Using'element={<UsingPage/>}/>
<Route path='/Practical'element={<PracticalPage/>}/>
<Route path='/mini6'element={<MiniPage/>}/>
<Route path='/Fragment'element={<ReactPage/>}/>
<Route path='/Avoiding'element={<AvoidingPage/>}/>
<Route path='/hoc'element={<HocPage/>}/>
<Route path='/cmusto'element={<CustomPage/>}/>
<Route path='/Reusa'element={<ReusaPage/>}/>
<Route path='/Api'element={<ApiCallsPage/>}/>
<Route path='/Reuse'element={<ReuseCustomPage/>}/>
<Route path='/pure'element={<PurePage/>}/>
<Route path='/Memo'element={<MemoPage/>}/>
<Route path='/Callback'element={<CallbackPage/>}/>
<Route path='/List'element={<ListPage/>}/>
<Route path='/Destructuring'element={<DestructuringPage/>}/>
<Route path='/Lazy'element={<LazyPage/>}/>
<Route path='/mini5'element={<ProjectPage/>}/>
<Route path='/Broswer'element={<BrowserPage/>}/>
<Route path='/mini4'element={<MiniPage/>}/>
<Route path='/Nested'element={<NestedPage/>}/>
<Route path='/dynamic'element={<DynamicPage/>}/>
<Route path='/Parameter'element={<ParametersPage/>}/>
<Route path='/Navigation'element={<NavigationPage/>}/>
<Route path='/Routes'element={<RoutePage/>}/>
<Route path='/Found'element={<FoundPage/>}/>
<Route path='/mini3'element={<PracticePage/>}/>
<Route path='/webpack'element={<WebpackPage/>}/>
<Route path='/Mini2'element={<MiniProjectPage/>}/>
<Route path='/Bable'element={<BablePage/>}/>
<Route path='/all'element={<AllConceptsPage/>}/>
<Route path='/Final'element={<FinalPage/>}/>
<Route path='/React'element={<ApplicationPage/>}/>
<Route path='/api'element={<ApiPage/>}/>
<Route path='/Routing'element={<RoutingPage/>}/>
<Route path='/mini1'element={<StudentPage/>}/>
<Route path='/Controll'element={<ControlledPage/>}/>
 <Route path='/handling'element={<HandlingPage />} />
<Route path='/form'element={<FormPage1/>}/>
<Route path='/dynamic'element={<DynamicPage/>}/>
<Route path='/Form'element={<FormPage/>}/>
{/*18-08-20026*/}
<Route path='/api1'element={<ApiCallPage/>}/>
<Route path='/fetch'element={<FetchAxiosPage/>}/>
<Route path='/Query'element={<QueryPage/>}/>
<Route path='/Error'element={<ErrorPage/>}/>
<Route path='/Loading'element={<LoadingStatesPage/>}/>
<Route path='/Response'element={<ResponsePage/>}/>
<Route path='/Integrate'element={<IntegratePage/>}/>
{/*19-08-2026*/}
<Route path='/API2'element={<APIPage/>}/>
<Route path='/Use'element={<UseReducerPage/>}/>
<Route path='/tool'element={<toolkitPage/>}/>
<Route path='/Global'element={<GlobalPage/>}/>
<Route path='/API11'element={<ApiReduxPage/>}/>

<Route path='/memo1'element={<ReactMemoPage/>}/>
<Route path='/memo'element={<useMemoPage/>}/>
<Route path='/call1'element={<useCalbackPage/>}/>
<Route path='/Lazy'element={<LoadingPage/>}/>
<Route path='/Splitting'element={<SplittingPage/>}/>
<Route path='/small'element={<SmallProjectPage/>}/>

<Route path='/React'element={<ReactPage/>}/>
<Route path='/Dynamic'element={<RoutingPage/>}/>
<Route path='/Nested'element={<RoutingPage/>}/>
<Route path='/Route'element={<ProtectedPage/>}/>
<Route path='/Four'element={<Fourpage/>}/>
<Route path='/small'element={<smallPage/>}/>
<Route path='/React'element={<RevisionPage/>}/>






  </Routes>
  </BrowserRouter>
  );
}

export default App
