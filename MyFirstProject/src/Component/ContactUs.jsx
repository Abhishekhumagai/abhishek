import "./Contact.css";
function ContactUs() {
  return (
    <>
      <div className="connectionss">
        <div className="contact">
          <div className="cont">
            <form>
              Name:
              <input type="text" name="Username" id="Username" />
              <br />
              <br />
              Email:
              <input type="email" name="email" id="email" />
              <br />
              <br />
              Password:
              <input type="Password" name="Password" id="Password" />
              <br />
              <br />
              <div className="subs">
                <button className="sub" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="sit">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            architecto quia, libero tempora repellat exercitationem nisi unde
            consequuntur voluptates excepturi incidunt aliquid eveniet quas
            modi, fugiat ea rerum! Magni, laudantium.
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
