import { ClimbingBoxLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-[100vh] bg-black flex justify-center items-center flex-col">
      <div>
        <ClimbingBoxLoader color="#de0913" size={20} />
      </div>
      <div className="text-white font-semibold mt-3 text-lg">Loading...</div>
    </div>
  );
}
