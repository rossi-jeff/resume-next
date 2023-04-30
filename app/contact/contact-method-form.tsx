export default function ContactMethodForm({
  fieldChanged,
}: {
  fieldChanged: Function;
}) {
  const emailTypes = ["Home", "Work"];
  const phoneTypes = [...emailTypes, "Cell"];
  const preferredTypes = ["Phone", "Email"];
  return (
    <div id="contact-method-form" className="flex flex-wrap justify-between">
      <div>
        <label htmlFor="EmailType">Email Type</label>
        <select name="EmailType" onChange={(ev: any) => fieldChanged(ev)}>
          {emailTypes.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="Email"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="PhoneType">Phone Type</label>
        <select name="PhoneType" onChange={(ev: any) => fieldChanged(ev)}>
          {phoneTypes.map((p, i) => (
            <option value={p} key={i}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="Phone">Phone</label>
        <input
          type="tel"
          name="Phone"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="Preferred">Preferred</label>
        <select name="Preferred" onChange={(ev: any) => fieldChanged(ev)}>
          {preferredTypes.map((p, i) => (
            <option value={p} key={i}>
              {p}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
