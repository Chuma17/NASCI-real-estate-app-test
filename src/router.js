import { createBrowserRouter } from "react-router-dom";
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
import MapMarker from "./components/map-info-window/map-info-window";
import FilterModal from "./components/modals/filter/filter";
import SubscribeModal from "./components/modals/subscribe/subscribe";
import { NewsProvider } from "./context/newsProvider";
import { ListingsProvider } from "./context/listingsProvider";
export const router = createBrowserRouter([
  {
    path: "",

    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  // REMOVE ALL THESES, THEY ARE ONLY FOR TESTING
  {
    path: "filter",
    element: <FilterModal />,
  },
  {
    path: "subscribe",
    element: <SubscribeModal />,
  },
  {
    path: "marker",
    element: <MapMarker />,
  },

  // STOP HERE
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <NewsProvider>
          <ListingsProvider>
            <Dashboard />
          </ListingsProvider>
        </NewsProvider>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "property",
        element: <Property />,
      },
      {
        path: "property/:propertyId",
        element: <PropertyDetail />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:newsId",
        element: <NewsNewsDetail />,
      },
      {
        path: "market-trends",
        element: <MarketTrends />,
      },
      {
        path: "map",
        element: <Map />,
      },

      {
        path: "watch-list",
        element: <Watchlist />,
      },
      {
        path: "estimator",
        element: <Estimator />,
      },

      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "help-support",
        element: <HelpSupport />,
      },
    ],
  },
  {
    path: "auth/signup",
    index: true,
    element: <Sign isRegister={true} />,
  },
  {
    path: "auth/signin",
    element: <Sign isRegister={false} />,
  },
  {
    path: "/*",
    element: (
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
    ),
    errorElement: <>This is the error Element component</>,
  },
]);
