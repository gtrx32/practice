import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
import PageLayout from "./layout/PageLayout"

function App() {

  return (
    <BrowserRouter>
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
