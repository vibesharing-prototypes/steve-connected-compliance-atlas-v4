import { RoutedNavLink } from '@diligentcorp/atlas-react-bundle/global-nav';
import ComplianceEthicsIcon from '@diligentcorp/atlas-react-bundle/icons/ComplianceEthics';
import HomeIcon from '@diligentcorp/atlas-react-bundle/icons/Home';
import ReportsIcon from '@diligentcorp/atlas-react-bundle/icons/Reports';
import SettingsIcon from '@diligentcorp/atlas-react-bundle/icons/Settings';
import TextIcon from '@diligentcorp/atlas-react-bundle/icons/Text';

export default function Navigation() {
  return (
    <>
      <RoutedNavLink to="/" label="D1P">
        <HomeIcon slot="icon" />
      </RoutedNavLink>
      <RoutedNavLink to="/connected-compliance" label="Connected Compliance">
        <ComplianceEthicsIcon slot="icon" />
      </RoutedNavLink>
      <RoutedNavLink to="/reports" label="Reports">
        <ReportsIcon slot="icon" />
      </RoutedNavLink>
      <RoutedNavLink to="/settings" label="Settings">
        <SettingsIcon slot="icon" />
      </RoutedNavLink>
      <RoutedNavLink to="/styles" label="Styles">
        <TextIcon slot="icon" />
      </RoutedNavLink>
    </>
  );
}
