import "./App.css";

import Navbar from "./component/Navigation/Navbar";
import Home from "./component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";
import CommentComponent from "./Feature/Comment/Comment";
import UserPost from "./component/Post/UserPost";
import MyCustomComponent from "./component/MyComponent/MyCustomComponent";
import User from "./component/User/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();
  
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store} >
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard/post" element={<UserPost/>} />
            <Route path="/component" element={<MyCustomComponent/>} />
            <Route path="/dashboard/post" element={<UserPost/>}/>
            <Route path="/dashboard/comment" element={<CommentComponent/>} />
            <Route path="/user" element={<User/>} />
          </Route>
        </Routes>
      </BrowserRouter>
       </ReduxProvider>
        </QueryClientProvider>
    
   
    </div>
  );
}

export default App;
