import { HashRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/auth/signup/signup";
import Property from "./pages/dashboard/property/property";
import PropertyDetail from "./pages/dashboard/property/property-detail/property-detail";
import Dashboard from "./pages/dashboard/dashboard";
import Overview from "./pages/dashboard/overview/overview";
import News from "./pages/dashboard/news/news";
import Watchlist from "./pages/dashboard/watchlist/watchlist";
import Estimator from "./pages/dashboard/estimator/estimator";
import NewsNewsDetail from "./pages/dashboard/news/news-detail/news-detail";
import Map from "./pages/dashboard/map/map";
import MarketTrends from "./pages/dashboard/market-trends/market-trends";
import Settings from "./pages/dashboard/settings/settings";
import HelpSupport from "./pages/dashboard/help-support/help-support";
import ProtectedRoute from "./protectedRoute";
import { NewsProvider } from "./context/newsProvider";
import { ListingsProvider } from "./context/listingsProvider";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* Define your routes here, similar to how you did with createBrowserRouter */}
        <Route
          path=""
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Your other routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <NewsProvider>
                <ListingsProvider>
                  <Dashboard />
                </ListingsProvider>
              </NewsProvider>
            </ProtectedRoute>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="property" element={<Property />} />
          <Route path="property/:propertyId" element={<PropertyDetail />} />
          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<NewsNewsDetail />} />
          <Route path="market-trends" element={<MarketTrends />} />
          <Route path="map" element={<Map />} />
          <Route path="watch-list" element={<Watchlist />} />
          <Route path="estimator" element={<Estimator />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help-support" element={<HelpSupport />} />
        </Route>
        <Route path="auth/signup" element={<Sign isRegister={true} />} />
        <Route path="auth/signin" element={<Sign isRegister={false} />} />
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                fontSize: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="error"
            >
              CANT FIND THIS PAGE
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
