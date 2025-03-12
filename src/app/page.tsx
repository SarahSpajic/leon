import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Leon</h1>

      <div>
        <Link href="/hci">
          <h2>New Topic</h2>
          <p>New Notes</p>
        </Link>
      </div>

      <section>
        <h2>Recent Activity</h2>
        <div>
          <p></p>
        </div>
      </section>
    </div>
  );
}
