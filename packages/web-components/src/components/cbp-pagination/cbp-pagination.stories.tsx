export default {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  argTypes: {
    records: {
      description: 'Specifies the total number of records.',
      control: 'number',
    },
    pagesize: {
      description: 'Specifies the number of records per page. Accepts numeric values and "All".',
      type: 'string',
    },
    page: {
      description: 'Specifies the current page.',
      type: 'number',
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
};

const Template = ({ records, pagesize, page, context, sx }) => {
  return ` 
      <cbp-pagination
        ${records ? `records=${records}` : ''}
        ${pagesize ? `page-size=${pagesize}` : ''}
        ${page ? `page=${page}` : ''}
        ${context && context != 'light-inverts' ? `context=${context}` : ''}
        ${sx ? `sx=${JSON.stringify(sx)}` : ''}
      >
        <cbp-form-field
          slot="cbp-pagination-items-per-page"
          label="Items Per Page"
          field-id="pagination_size"
        >
          <cbp-dropdown field-id="pagination_size">
            <cbp-dropdown-item value="10">10/Page</cbp-dropdown-item>
            <cbp-dropdown-item value="25">25/Page</cbp-dropdown-item>
            <cbp-dropdown-item value="50">50/Page</cbp-dropdown-item>
            <cbp-dropdown-item value="100">100/Page</cbp-dropdown-item>
            <cbp-dropdown-item value="all">All Results</cbp-dropdown-item>
          </cbp-dropdown>
        </cbp-form-field>

        <cbp-form-field
          slot="cbp-pagination-pages"
          label="Page Displayed"
          field-id="pagination_pages"
        >
          <cbp-dropdown field-id="pagination_pages">
          </cbp-dropdown>
        </cbp-form-field>

      </cbp-pagination>
    `;
};

/*
            <cbp-dropdown-item value="1" selected>Page 1 of 5</cbp-dropdown-item>
            <cbp-dropdown-item value="2">Page 2 of 5</cbp-dropdown-item>
            <cbp-dropdown-item value="3">Page 3 of 5</cbp-dropdown-item>
            <cbp-dropdown-item value="4">Page 4 of 5</cbp-dropdown-item>
            <cbp-dropdown-item value="5">Page 5 of 5</cbp-dropdown-item>

*/


export const Pagination = Template.bind({});