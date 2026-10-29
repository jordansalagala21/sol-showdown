// One place for every link and date on the site.
// Swap the "#..." placeholders for real URLs before launch.
export const site = {
  solUrl: "https://heysol.app",
  preSurveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLScxOy3iso_iN0t88qWqlNwBRcPCuoAvfrW1SHaIe79nVqKU1w/viewform?usp=send_form",
  postSurveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLScgrTbaP9TgYHtCQZ0dvI5v-LRiVDoBe5ecUhBq-xa0olE6Pw/viewform",
  registerUrl: "https://dais-website-pink.vercel.app/events/sol-showdown#rsvp",
  // Paste the submission form link here. While empty, the button shows "opens Oct 29" instead.
  submissionFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScC6AhfmtrUqi2d-0RENH3RLg1PKlqzCx5CUEwsLFn-hk3Nmg/viewform",
  instagramUrl: "https://www.instagram.com/heysol.app/",
  instagramHandle: "@heysol.app",
  contacts: [
    { name: "Lakshitha", email: "govindal@rider.edu" },
    { name: "Jordan", email: "salagalaj@rider.edu" },
  ],
  // Countdown target: Mon, Nov 2 at 6:00 PM Eastern (EST, after DST ends Nov 1)
  deadline: "2026-11-02T18:00:00-05:00",
};

export const ext = { target: "_blank", rel: "noopener" } as const;
