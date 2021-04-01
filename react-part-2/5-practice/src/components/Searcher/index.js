import { useUser } from "../../context/user";
import { useForm } from "../../hooks/useForm";
import { getUser } from "../../services/users";

export const Searcher = () => {
  const { updateUser } = useUser();
  const { getInput, handleSubmit } = useForm({
    intialValues: {
      search: "",
    },
  });

  const handleSearchUser = handleSubmit(({ search }) => {
    if (search === "") return;
    getUser(search).then(updateUser);
  });

  return (
    <form onSubmit={handleSearchUser}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        {...getInput("search")}
      />
      <button>Search</button>
    </form>
  );
};
