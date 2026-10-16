
import { UsersPage } from "../features/users/pages/UsersPage";
import { ErrorBoundary } from "../components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white p-4 shadow-sm">
          <h1 className="text-xl font-bold">
            My Application
          </h1>
        </header>

        <main className="p-6">
          <UsersPage />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
