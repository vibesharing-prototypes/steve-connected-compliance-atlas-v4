import { AppLayout } from '@diligentcorp/atlas-react-bundle';
import { Outlet, Route, Routes } from 'react-router';
import './styles.css';

import Navigation from './Navigation.js';
import ComplianceReportsPage from './pages/ComplianceReportsPage.js';
import IndexPage from './pages/IndexPage.js';
import ReportQ12026Page from './pages/ReportQ12026Page.js';
import ReportsPage from './pages/ReportsPage.js';
import SettingsPage from './pages/SettingsPage.js';
import StylesPage from './pages/StylesPage.js';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout navigation={<Navigation />} orgName="Connected Compliance">
            <Outlet />
          </AppLayout>
        }
      >
        <Route index element={<IndexPage />} />
        <Route path="connected-compliance" element={<ComplianceReportsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="reports/q1-2026" element={<ReportQ12026Page />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="styles" element={<StylesPage />} />
      </Route>
    </Routes>
  );
}
