import { site } from "@/lib/site";

// "Lakshitha (govindal@rider.edu) or Jordan (salagalaj@rider.edu)" with mailto links
export default function Contacts() {
  return (
    <>
      {site.contacts.map((c, i) => (
        <span key={c.email}>
          {i > 0 && " or "}
          {c.name} (<a href={`mailto:${c.email}`}>{c.email}</a>)
        </span>
      ))}
    </>
  );
}
