import "./App.css";
import { AuthProvider } from "./context/authProvider";
import { useEffect, useState, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "src/pages/loading_animation.json";
import AppRouter from "./router"; // Import the router component

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setIsReady(true), 400);
  }, []);

  return (
    <AuthProvider>
      {isReady ? (
        <Suspense
          fallback={
            <Lottie
              className="startup_loading_screen"
              animationData={Loading}
              loop={true}
            />
          }
        >
          <AppRouter /> {/* Use the AppRouter here */}
        </Suspense>
      ) : (
        <Lottie
          className="startup_loading_screen"
          animationData={Loading}
          loop={true}
        />
      )}
    </AuthProvider>
  );
}

export default App;
