"use client";

import { FormatName } from "../../lib/format-name";
import { Reference } from "../../types/reference.type";

export default function ReferenceCard({ reference }: { reference: Reference }) {
  const toggle = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.style.display = el.style.display == "block" ? "none" : "block";
  };
  return (
    <div id={"reference-" + reference.Id} className="mb-4 card">
      {reference.Name && <h3>{FormatName(reference.Name)}</h3>}
      {reference.Company && (
        <div>
          <strong>Company</strong>
          {reference.Company}
        </div>
      )}
      {reference.Title && (
        <div>
          <strong>Title</strong>
          {reference.Title}
        </div>
      )}
      {((reference.Phones && reference.Phones.length > 0) ||
        (reference.Emails && reference.Emails.length > 0)) && (
        <div>
          <button onClick={() => toggle(`contact-info-${reference.Id}`)}>
            Contact Information
          </button>
          <div id={"contact-info-" + reference.Id} className="hidden">
            {reference.Phones && reference.Phones.length > 0 && (
              <div>
                <strong>Phone</strong>{" "}
                {reference.Phones.map((p) => p.Number).join(", ")}
              </div>
            )}
            {reference.Emails && reference.Emails.length > 0 && (
              <div>
                <strong>Email</strong>{" "}
                {reference.Emails.map((e) => e.Address).join(", ")}
              </div>
            )}
          </div>
        </div>
      )}
      {reference.Comments && reference.Comments.length > 0 && (
        <div>
          <button onClick={() => toggle(`comments-${reference.Id}`)}>
            Comments
          </button>
          <div id={"comments-" + reference.Id} className="hidden">
            {reference.Comments.map((comment) => (
              <div key={comment.Id}>{comment.Message}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
