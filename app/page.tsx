import { signIn, auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default Home;
