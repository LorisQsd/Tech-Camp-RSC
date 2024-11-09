import ButtonLink from "@/components/ui/buttons/ButtonLink";

const navLinks = [
  {
    href: "/interactivity",
    content: "Interactivity",
  },
  {
    href: "/streaming",
    content: "Streaming",
  },
];

const Page = async () => (
  <ul className="mx-auto flex gap-6 my-8">
    {navLinks.map(({ href, content }) => (
      <li key={href}>
        <ButtonLink href={href}>{content}</ButtonLink>
      </li>
    ))}
  </ul>
);

export default Page;
