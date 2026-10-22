import { site } from "@/lib/site";

// Opens the submission form, or shows a disabled "coming soon" button until
// site.submissionFormUrl is filled in.
export default function SubmitButton() {
  return site.submissionFormUrl ? (
    <a className="btn btn-pink" href={site.submissionFormUrl} target="_blank" rel="noopener">open the submission form</a>
  ) : (
    <span className="btn btn-disabled" aria-disabled="true">submission form opens Oct 29</span>
  );
}
