
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./App.css";
import Taskbar from './taskbar';
import AdminDashboard from './components/AdminDashboard';
import HtmlGenerator from '../apps/html_generator/src/App';
import SlayTheSpire from '../apps/slay-the-spire/src/App';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App bg-[#242d36] min-h-screen">
          <Taskbar />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<div>Welcome to PjHub</div>} />
              <Route path="/html-generator" element={<HtmlGenerator />} />
              <Route path="/slay-the-spire" element={<SlayTheSpire />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
