import Container from "./Container";

export default function Section({ children }) {
  return (
    <section className="py-28">
      <Container>{children}</Container>
    </section>
  );
}
