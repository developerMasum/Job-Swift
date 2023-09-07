import Applied from "./AppliedComponents/Applied";
import Assessment from "./AppliedComponents/Assessment";
import Hired from "./AppliedComponents/Hired";
import Interview from "./AppliedComponents/Interview";
import Offer from "./AppliedComponents/Offer";
import PhoneScreen from "./AppliedComponents/PhoneScreen";
import Sourced from "./AppliedComponents/Sourced";

export const renderAppliedTabs = (activeTab) => {
  switch (activeTab) {
    case "tabs1":
      return <Assessment />;
    case "tabs2":
      return <Sourced />;
    case "tabs3":
      return <Applied />;
    case "tabs4":
      return <PhoneScreen />;
    case "tabs5":
      return <Assessment />;
    case "tabs6":
      return <Interview />;
    case "tabs7":
      return <Offer />;
    case "tabs8":
      return <Hired />;
    default:
      return null;
  }
};
