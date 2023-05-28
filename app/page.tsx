import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className="h-72">
      <div>
        <div className="flex justify-center align-middle  space-x-2">
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        </div>
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
        <User/>
      </div>
    </main>
  );
}
