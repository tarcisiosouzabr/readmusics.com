import { useSession, signIn, signOut } from "next-auth/react";
export default function SessionButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <span className="leading-snug text-white text-xs uppercase font-bold ml-2">
          {session.user.name}
        </span>
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="#pablo"
          onClick={() => signOut()}
        >
          <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>

          <span className="ml-2">Sign out</span>
        </a>
      </>
    );
  }
  return (
    <>
      <a
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        href="#pablo"
        onClick={() => signIn()}
      >
        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
        <span className="ml-2">Sign in</span>
      </a>
    </>
  );
}
