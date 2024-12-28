import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{ background: "#f9f9f9", padding: "2rem", textAlign: "center" }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/cover">表紙</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/itinerary">旅の予定</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/seal-rally">旅のシールラリー</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/activity">たのしい遊び</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/conversation">おばあちゃん・おじいちゃんとお話</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/memory">旅の思い出</Link>
        </li>
      </ul>
    </main>
  );
}
