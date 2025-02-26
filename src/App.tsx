import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./layouts";
import { NewsFeed } from "./pages";

function App() {
  // Create a client
  const queryClient = new QueryClient()
  return (
    // Provide the client to our App
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <NewsFeed />
      </MainLayout>
    </QueryClientProvider>
  )
}

export default App
