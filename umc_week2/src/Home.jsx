import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Counter</div>
      <div>Modal</div>
    </div>
  );
}
