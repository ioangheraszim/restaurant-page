import createFormGroup from "./FormGroup";
import createField from "./CreateField";

export default function loadContactForm(enquiry) {
  const contactSection = document.createElement("section");
  contactSection.className = "contact";

  const containerDiv = document.createElement("div");
  containerDiv.className = "container form__container";

  const paragraph = document.createElement("p");
  paragraph.className = "paragraph paragraph--large";
  paragraph.textContent =
    "Let us know the details of your event, then relax, and leave the planning to us.";
  containerDiv.appendChild(paragraph);

  const form = document.createElement("form");
  form.action = "#";

  // Form group 1: Name and Contact Number
  const formGroup1 = createFormGroup([
    {
      label: "Name:",
      id: "name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      label: "Contact Number:",
      id: "number",
      type: "text",
      placeholder: "Enter contact number here",
    },
  ]);
  form.appendChild(formGroup1);

  // Form group 2: Event Type and Party Size
  const formGroup2 = createFormGroup([
    {
      label: "Event Type:",
      id: "event",
      type: "text",
      placeholder: "eg Wedding Reception, Corporate Event etc.",
    },
    {
      label: "Party Size (approx):",
      id: "party-size",
      type: "text",
      placeholder: "eg 20 people",
    },
  ]);
  form.appendChild(formGroup2);

  // Additional Information
  const additionalInfoField = createField(
    "Additional Information:",
    "information",
    "textarea",
    "Anything you feel would make your event more memorable",
    8
  );
  form.appendChild(additionalInfoField);

  // Enquiry Button
  const enquiryContainer = document.createElement("div");
  enquiryContainer.className = "enquiry-container";

  const enquiryButton = document.createElement("button");
  enquiryButton.className = "btn btn--enquiry";
  enquiryButton.type = "button";
  enquiryButton.textContent = enquiry;
  enquiryContainer.appendChild(enquiryButton);

  form.appendChild(enquiryContainer);
  containerDiv.appendChild(form);
  contactSection.appendChild(containerDiv);

  return contactSection;
}
