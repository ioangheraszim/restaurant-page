export default function createField(labelText, id, type, placeholder, rows = null) {
    const fieldContainer = document.createElement('div');
    fieldContainer.className = 'field-container';

    const label = document.createElement('label');
    label.htmlFor = id;
    label.className = 'field-label';
    label.textContent = labelText;

    let inputElement;
    if (type === 'textarea') {
        inputElement = document.createElement('textarea');
        inputElement.rows = rows;
        inputElement.maxLength = 5000;
    } else {
        inputElement = document.createElement('input');
        inputElement.type = type;
    }

    inputElement.name = id;
    inputElement.id = id;
    inputElement.className = 'field-input';
    inputElement.placeholder = placeholder;

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(inputElement);

    return fieldContainer;
}
