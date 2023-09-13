import Applied from "./AppliedComponents/Applied";
import Assessment from "./AppliedComponents/Assessment";
import Hired from "./AppliedComponents/Hired";
import Interview from "./AppliedComponents/Interview";
import Offer from "./AppliedComponents/Offer";
import PhoneScreen from "./AppliedComponents/PhoneScreen";
import Sourced from "./AppliedComponents/Sourced";

export const renderAppliedTabs = (activeTab, id) => {
  switch (activeTab) {
    // case "tabs1":
    //   return <Assessment id={id} />;
    case "tabs2":
      return <Sourced id={id} />;
    case "tabs3":
      return <Applied id={id} />;
    // case "tabs4":
    //   return <PhoneScreen id={id} />;
    case "tabs5":
      return <Assessment id={id} />;
    case "tabs6":
      return <Interview id={id} />;
    case "tabs7":
      return <Offer id={id} />;
    case "tabs8":
      return <Hired id={id} />;
    default:
      return null;
  }
};
