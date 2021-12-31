export default function Footer() {
  const link = (text: string, href: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );

  return (
    <div
      style={{
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      {link("Twitter", "https://twitter.com/SatraBrunn")}
      {link("Discord", "https://discord.gg/ZMtXgYrm5N")}
    </div>
  );
}
