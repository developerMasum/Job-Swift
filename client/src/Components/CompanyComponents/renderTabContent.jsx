import FilesTab from "./FilesTab";
import OnboardingTab from "./OnboardingTab";
import OrgChartTab from "./OrgChartTab";
import PeopleDirectoryTab from "./PeopleDirectoryTab";

export const renderTabContent = (activeTab) => {
  switch (activeTab) {
    case "tabs1":
      return <PeopleDirectoryTab />;
    case "tabs2":
      return <OrgChartTab />;
    case "tabs3":
      return <FilesTab />;
    case "tabs4":
      return <OnboardingTab />;
    default:
      return null;
  }
};
