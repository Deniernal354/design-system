export default {
  title: 'Components/Form Field Wrapper',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    fieldId: {
      control: 'text',
    },
    inputType:{
      control: 'select',
      options: [ "text", "number", "password", "search"] // email, tel, url
    },
    error: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    overlayStart: {
      control: 'text',
    },
    overlayEnd: {
      control: 'text',
    },
    context : {
      control: 'select',
      options: [ "light-inverts", "light-always", "dark-inverts", "dark-always"]
    },
    sx: {
      description: 'Supports adding inline styles as an object of key-value pairs comprised of CSS properties and values. Values should reference design tokens when possible.',
      control: 'object',
    },
  },
  args: {
    label: 'Field Label',
    description: 'Field description.',
    inputType: 'text'
  },
};

const InputWithOverlaysTemplate = ({ label, description, inputType, overlayStart, overlayEnd, fieldId, error, readonly, disabled, value, context, sx }) => {
  return ` 
    <cbp-form-field
      ${label ? `label="${label}"` : ''}
      ${description ? `description="${description}"` : ''}
      ${fieldId ? `field-id="${fieldId}"` : ''}
      ${error ? `error` : ''}
      ${context && context != 'light-inverts' ? `context=${context}` : ''}
      ${sx ? `sx=${JSON.stringify(sx)}` : ''}
    >
      <cbp-form-field-wrapper
        ${sx ? `sx=${JSON.stringify(sx)}` : ''}
      >  
        <input type="${inputType}" name="textinput" ${value ? `value="${value}"` : ''}  ${readonly ? `readonly` : ''} ${disabled ? `disabled` : ''} />
        ${overlayStart != undefined ? `<span slot="cbp-form-field-overlay-start">${overlayStart}</span>` : ''}
        ${overlayEnd != undefined ? `<span slot="cbp-form-field-overlay-end">${overlayEnd}</span>` : ''}
      </cbp-form-field-wrapper>
    </cbp-form-field>
  `;
};

export const InputWithOverlays = InputWithOverlaysTemplate.bind({});
InputWithOverlays.args = {
  value: '',
};



const SearchTemplate = ({ label, description, inputType,  overlayStart, overlayEnd, fieldId, error, readonly, disabled, value, context, sx }) => {
  return ` 
    <cbp-form-field
      ${label ? `label="${label}"` : ''}
      ${description ? `description="${description}"` : ''}
      ${fieldId ? `field-id="${fieldId}"` : ''}
      ${error ? `error` : ''}
      ${context && context != 'light-inverts' ? `context=${context}` : ''}
      ${sx ? `sx=${JSON.stringify(sx)}` : ''}
    >
      <cbp-form-field-wrapper
        ${sx ? `sx=${JSON.stringify(sx)}` : ''}
      >  
        <input
          type="${inputType}"
          name="search"
          ${value ? `value="${value}"` : ''}
          ${readonly ? `readonly` : ''}
          ${disabled ? `disabled` : ''}
        />

        ${overlayStart != undefined ? `<span slot="cbp-form-field-overlay-start">${overlayStart}</span>` : ''}
        ${overlayEnd != undefined ? `<span slot="cbp-form-field-overlay-end">${overlayEnd}</span>` : ''}
        
        <span slot="cbp-form-field-attached-buttons">
          <cbp-button
            type="submit"
            fill="solid"
            color="secondary"
            variant="square"
            ${disabled ? `disabled` : ''}
            accessibility-text="Search"
          >
            <cbp-icon name="magnifying-glass"></cbp-icon>
          </cbp-button>
        </span>
        
      </cbp-form-field-wrapper>
    </cbp-form-field>
  `;
};

export const Search = SearchTemplate.bind({});
Search.args = {
  label: 'Search',
  description: '',
  fieldId: 'search',
  inputType: 'search',
  value: '',
};
