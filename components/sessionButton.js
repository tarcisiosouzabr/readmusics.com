import { useSession, signIn, signOut } from "next-auth/react";
export default function SessionButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div onClick={() => signOut()}>{session.user.name}</div>
      </>
    );
  }
  return (
    <>
      <div onClick={() => signIn()}>Log In</div>
    </>
  );
}
