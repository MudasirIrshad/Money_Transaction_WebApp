import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();
export default function Home() {
  return (
    <>
      <div className="text-5xl">hello world</div>
    </>
  );
}
