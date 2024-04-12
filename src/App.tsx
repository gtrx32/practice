import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import PageLayout from "./layout/PageLayout";
import AppContextProvider from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContextProvider>
      <BrowserRouter>
        <PageLayout>
          <AppRouter />
        </PageLayout>
      </BrowserRouter>
    </AppContextProvider>
  </QueryClientProvider>
);

export default App;
