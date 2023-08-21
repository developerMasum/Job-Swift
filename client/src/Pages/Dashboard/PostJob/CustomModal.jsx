import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ showPop, setShowPop }) => {
  return (
    <div className={`modalBackground ${showPop ? "visible" : "hidden"}`}>
      <div className="modalContainer p-6 rounded-lg shadow-md bg-white">
        <button
          onClick={() => setShowPop(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <RiCloseLine />
        </button>
        <h1 className="text-2xl font-semibold mb-4">User Information</h1>
      </div>
    </div>
  );
};

export default CustomModal;
