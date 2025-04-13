import createField from "./CreateField.js";

export default function createFormGroup(fields) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    fields.forEach(({ label, id, type, placeholder }) => {
        const field = createField(label, id, type, placeholder);
        formGroup.appendChild(field);
    });

    return formGroup;
}
