// One place for every link and date on the site.
// Swap the "#..." placeholders for real URLs before launch.
export const site = {
  solUrl: "https://heysol.app",
  registerUrl: "#register-link-goes-here",
  submissionFormUrl: "#submission-form-link",
  instagramUrl: "#instagram-link",
  instagramHandle: "@sol-instagram-handle", // TBD
  contacts: [
    { name: "Lakshitha", email: "govindal@rider.edu" },
    { name: "Jordan", email: "salagalaj@rider.edu" },
  ],
  // Countdown target. Exact time on Mon, Nov 2 is still TBD.
  deadline: "2026-11-02T23:59:00",
};

export const ext = { target: "_blank", rel: "noopener" } as const;
