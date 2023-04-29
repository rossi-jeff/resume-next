import { FormatAddress } from "@/lib/format-address";
import { School } from "@/types/school.type";

export default function SchoolCard({ school }: { school: School }) {
  return (
    <div id={"school-" + school.Id} className="mb-4">
      <h3>{school.Name}</h3>
      {school.From && school.To && (
        <div className="flex flex-wrap">
          <div className="mr-4">
            <strong>From</strong>
            {school.From.Month}
            {school.From.Year}
          </div>
          <div>
            <strong>To</strong>
            {school.To.Month}
            {school.To.Year}
          </div>
        </div>
      )}
      {school.Address && FormatAddress(school.Address) && (
        <div>
          <strong>Address</strong>
          {FormatAddress(school.Address)}
        </div>
      )}
      {school.Degree && (
        <div>
          <strong></strong>
          {school.Degree}
        </div>
      )}
      {school.Program && (
        <div>
          <strong></strong>
          {school.Program}
        </div>
      )}
    </div>
  );
}
