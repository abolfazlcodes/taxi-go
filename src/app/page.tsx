import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
      home page
    </div>
  );
}
