import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const Home = () => {
  const toastTest = () => {
    console.log(" testing toast");
    toast.warn("This is a toast message");
  };

  return (
    <div>
      <Navbar />
      <button
        className="btn btn-accent btn-outline bg-slate-800 rounded-full w-128"
        onClick={toastTest}
      >
        Three
      </button>
    </div>
  );
};

export default Home;
