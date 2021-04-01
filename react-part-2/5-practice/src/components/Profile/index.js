import { useEffect, useState } from "react";
import { useUser } from "../../context/user";

export const Profile = () => {
  const [repos, setRepos] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetch(user.repos_url)
      .then((res) => res.json())
      .then(setRepos);
  }, [user]);

  return (
    <>
      <img src={user?.avatar_url} alt={user?.name} />
      <h1>{user?.name}</h1>
      <p>{user?.bio}</p>
      <p>{user?.location}</p>
      <p>Followers: {user?.followers}</p>
      <p>Fowlling: {user?.following}</p>
      <p>
        Blog:
        <a href={user?.blog} target="_blank">
          {user?.blog}
        </a>
      </p>
      <h2>{user?.login}</h2>
      <img
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user?.login}&layout=compact)`}
        alt={`${user?.name}'s Stats`}
      />
      <h2>Repos</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo?.id}>
            <a href={repo?.html_url} target="_blank">
              {repo?.name}
            </a>
            <span>{repo?.language}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
