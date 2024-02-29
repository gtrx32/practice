import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import PageLayout from "./layout/PageLayout";
import AppContextProvider from "./context";

const App = () => (
  <AppContextProvider>
    <BrowserRouter>
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </BrowserRouter>
  </AppContextProvider>
);

export default App;
