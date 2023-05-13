export default function FooterBar() {
  return (
    <div
      id="footer-bar"
      className="bg-navy text-offwhite mx-4 my-4 p-2 rounded"
    >
      <div className="md:flex md:flex-wrap">
        <div>
          <strong>Jeff Rossi</strong>
        </div>
        <div className="md:flex-grow md:text-center">
          1506 Tuscaloosa Ave, Holly Hill Florida 32117
        </div>
        <div>
          <a href="mailto:inquiries@jeff-rossi.com">inquiries@jeff-rossi.com</a>
        </div>
      </div>
    </div>
  );
}
