export default function AddressForm({
  fieldChanged,
}: {
  fieldChanged: Function;
}) {
  return (
    <div id="address-form">
      <div>
        <label htmlFor="Address.Address">Address</label>
        <input
          type="text"
          name="Address.Address"
          className="w-full"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div>
        <label htmlFor="Address.Suite">Suite</label>
        <input
          type="text"
          name="Address.Suite"
          className="w-full"
          onChange={(ev: any) => fieldChanged(ev)}
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <label htmlFor="Address.City">City</label>
          <input
            type="text"
            name="Address.City"
            onChange={(ev: any) => fieldChanged(ev)}
          />
        </div>
        <div>
          <label htmlFor="Address.State">State</label>
          <input
            type="text"
            name="Address.State"
            onChange={(ev: any) => fieldChanged(ev)}
          />
        </div>
        <div>
          <label htmlFor="Address.Zip">Zip</label>
          <input
            type="text"
            name="Address.Zip"
            onChange={(ev: any) => fieldChanged(ev)}
          />
        </div>
      </div>
    </div>
  );
}
