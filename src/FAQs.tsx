type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "What is a DAO?",
    a: "DAO stands for decentralized autonomous organization.",
  },
];

export default function FAQs() {
  const faq = (x: FAQ) => (
    <div key={x.q}>
      <h4>{x.q}</h4>
      <p>{x.a}</p>
    </div>
  );

  return <div>{faqs.map((f) => faq(f))}</div>;
}
