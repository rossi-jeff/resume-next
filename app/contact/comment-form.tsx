export default function CommentForm({
  fieldChanged,
}: {
  fieldChanged: Function;
}) {
  return (
    <div id="comment-form">
      <div>
        <label htmlFor="Subject">Subject</label>
        <input
          type="text"
          name="Subject"
          className="w-full"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="Message">Message</label>
        <textarea
          name="Message"
          className="w-full h-20"
          onChange={(ev: any) => fieldChanged(ev)}
        ></textarea>
      </div>
    </div>
  );
}
