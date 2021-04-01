import { Profile } from "./components/Profile";
import { Searcher } from "./components/Searcher";
import { useUser } from "./context/user";

export default function App() {
  const { user } = useUser();
  return (
    <div>
      <Searcher />
      {user && <Profile />}
    </div>
  );
}
