export default function NameForm({ fieldChanged }: { fieldChanged: Function }) {
  const salutations = ["Mr", "Mrs", "Ms", "Dr", "Miss"];
  return (
    <div id="name-form" className="flex flex-wrap justify-between">
      <div>
        <label htmlFor="Name.Salutation">Salutation</label>
        <select name="Name.Salutation" onChange={(ev: any) => fieldChanged(ev)}>
          {salutations.map((s, i) => (
            <option value={s} key={i}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="Name.First">First</label>
        <input
          type="text"
          name="Name.First"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="Name.Middle">Middle</label>
        <input
          type="text"
          name="Name.Middle"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="Name.Last">Last</label>
        <input
          type="text"
          name="Name.Last"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="Name.Suffix">Suffix</label>
        <input
          type="text"
          name="Name.Suffix"
          className="w-20"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
    </div>
  );
}
