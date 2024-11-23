import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";
import EventApply from "./pages/EventApply";
import EventConfirm from "./pages/EventConfirm";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate to="/events" />} />
        <Route path="events" element={<Layout />}>
          <Route index element={<EventList />} />
          <Route path=":id" element={<EventDetail />} />
          <Route path=":id/apply" element={<EventApply />} />
          <Route path=":id/confirm" element={<EventConfirm />} />
        </Route>
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </HashRouter>
  );
}
