import Content from "@/components/pages/Page5c2dae703b";
import Experience from "@/components/Experience";
export const metadata = {
  title: "All Podcasts & Articles | Terminal Industries",
};
export default function Page() {
  return (
    <Experience route="/resources/podcasts-articles">
      <Content />
    </Experience>
  );
}
