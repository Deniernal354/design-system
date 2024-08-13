export default {
    title: 'Components/List',
    tags: ['autodocs'],
    argTypes: {
        tag: {
          control: 'select',
          description: 'Type of List',
          options: ['ul', 'ol'],
        },
        // size: {
        //   control: 'select',
        //   description: 'Font size of list text',
        //   options: ['normal', 'large'],
        // },
        accessibilityText: {
          description: 'Support for accessibility text',
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
      tag: 'ul',
    },
};

function generateItems(items) {
    const html = items.map(({ content}) => {
        return `<li>${content}</li>`;      
    });
    return html.join('');
  }


  
const Template = ({listItems, tag, size, accessibilityText, context, sx}) => {
    return ` 
    <cbp-list
      ${tag ? `tag=${tag}` : ''}
      ${size ? `size=${size}` : ''}
      ${accessibilityText ? `accessibility-text="${accessibilityText}"` : ''}
      ${context && context != 'light-inverts' ? `context=${context}` : ''}
      ${sx ? 'sx=' + JSON.stringify(sx) : ''}
    >
        ${generateItems(listItems)}
    </cbp-list>
    `;
};

export const List = Template.bind({});
    List.args = {
        listItems: [
            {
              content: "List Item 1",
            },
            {
              content: "List Item 2",
            },
            {
              content: "List Item 3",
            },
            {//example of ul sublist
              content: `
              List Item 4
                <ul>
                  <li>List Sub-Item 1</li>
                  <li>List Sub-Item 2</li>
                  <li>List Sub-Item 3</li>
                  <li>List Sub-Item 4</li>
                  <li>List Sub-Item 5</li>
                </ul>
                `,
              sublist: true
            },
            // {//example of ol sublist
            //   content: `
            //     list Item 5
            //     <ol>
            //       <li>List Sub-Item 1</li>
            //       <li>List Sub-Item 2</li>
            //       <li>List Sub-Item 3</li>
            //       <li>List Sub-Item 4</li>
            //       <li>List Sub-Item 5
            //       <ol>
            //         <li>List Sub-Item 1</li>
            //         <li>List Sub-Item 2</li>
            //         <li>List Sub-Item 3</li>
            //         <li>List Sub-Item 4</li>
            //         <li>List Sub-Item 5
            //         <ol>
            //           <li>List Sub-Item 1</li>
            //           <li>List Sub-Item 2</li>
            //           <li>List Sub-Item 3</li>
            //           <li>List Sub-Item 4</li>
            //           <li>List Sub-Item 5</li>
            //         </ol>
            //         </li>
            //       </ol>
            //       </li>  
            //     </ol>
            //     `,
            //   sublist: true
            // },
          ],
      size: 'normal'
};

List.argTypes ={
  size: {
      control: 'select',
      description: 'Font size of list text',
      options: ['normal', 'large'],
    },
}

//Unstyled

const UnstyledTemplate = ({listItems, tag, size, accessibilityText, context, sx}) => {
  return ` 
  <cbp-list
    variant= 'unstyled'
    ${tag ? `tag=${tag}` : ''}
    ${size ? `size=${size}` : ''}
    ${accessibilityText ? `accessibility-text="${accessibilityText}"` : ''}
    ${context && context != 'light-inverts' ? `context=${context}` : ''}
    ${sx ? 'sx=' + JSON.stringify(sx) : ''}
  >
      ${generateItems(listItems)}
  </cbp-list>
  `;
};

export const UnstyledList = UnstyledTemplate.bind({});
UnstyledList.args = {
      listItems: [
          {
            content: "List Item 1",
          },
          {
            content: "List Item 2",
          },
          {
            content: "List Item 3",
          },
          {
            content: "List Item 4",
          },
          {
            content: "List Item 5",
          },
          {
            content: "List Item 6",
          },
      ]
    };

function generateLinkListItems(items, size, parentVariant) {
  if(size != 'normal'){
    
    const html = items.map(({ content}) => {
      return `<li>
                <cbp-icon ${parentVariant == 'link-external' ? 'name="external-link-alt"' : 'name="arrow-right"'}
                sx='{"color":"var(--cbp-link-list-icon-color)"}'
                > </cbp-icon>
                <cbp-link href='#' target='_self'>${content}</cbp-link>
                ${parentVariant == 'link-external' ? `<br /><cbp-icon name="globe" /> </cbp-icon><cbp-typography tag="span" variant="body-text" sx='{"color":"var(--cbp-link-list-icon-color)"}'><i> ` + content + ` description </i></cbp-typography>` : ''} 
              </li>`;      
    });
    return html.join('');
  } else {  //size == 'normal'
    const html = items.map(({ content}) => {
      return `<li>
                <cbp-icon ${parentVariant == 'link-external' ? 'name="external-link-alt"' : 'name="arrow-right"'}
                  sx='{"color":"var(--cbp-link-list-icon-color)"}'
                > </cbp-icon>
                <cbp-link href='#' target='_self'>${content}</cbp-link>
              </li>`;      
    });
    return html.join('');    
  } 
}
              
const InternalLinkListTemplate = ({linkListItems, size, accessibilityText, context, sx}) => {
  return ` 
  <cbp-list
    variant='link' 
    ${size ? `size=${size}` : ''}
    ${accessibilityText ? `accessibility-text="${accessibilityText}"` : ''}
    ${context && context != 'light-inverts' ? `context=${context}` : ''}
    ${sx ? 'sx=' + JSON.stringify(sx) : ''}
  >
      ${generateLinkListItems(linkListItems, size, 'link-internal')}
  </cbp-list>`;
};

export const InternalLinkList = InternalLinkListTemplate.bind({});
  InternalLinkList.args = {
      linkListItems: [
          {
            content: "List Link Item 1",
          },
          {
            content: "List Link Item 2",
          },
          {
            content: "List Link Item 3",
          },
        ]
};

const ExternalLinkListTemplate = ({linkListItems, size, accessibilityText, context, sx}) => {
  return ` 
    <cbp-list
    variant='link' 
    ${size ? `size=${size}` : ''}
    ${accessibilityText ? `accessibility-text="${accessibilityText}"` : ''}
    ${context && context != 'light-inverts' ? `context=${context}` : ''}
    ${sx ? 'sx=' + JSON.stringify(sx) : ''}
  >
      ${generateLinkListItems(linkListItems, size, 'link-external')}
  </cbp-list>
  `;
};

export const ExternalLinkList = ExternalLinkListTemplate.bind({});
  ExternalLinkList.args = {
      linkListItems: [
          {
            content: "List Link Item 1",
          },
          {
            content: "List Link Item 2",
          },
          {
            content: "List Link Item 3",
          },
        ],
      size: 'normal'
};
ExternalLinkList.argTypes ={
  size: {
      control: 'select',
      description: 'Font size of list text',
      options: ['normal', 'large'],
    },
}

function generateIconItems(items) {
  const html = items.map(({ content, icon, color}) => {
      return `<li>
                <cbp-icon 
                  name='${icon}' 
                  color='${color}'
                  size='var(--cbp-space-5x)'
                ></cbp-icon>
                ${content}
              </li>`;      
  });
  return html.join('');
}

const IconListTemplate = ({linkListItems, accessibilityText, context, sx}) => {
  return ` 
    <cbp-list
    variant='icon' 
    ${accessibilityText ? `accessibility-text="${accessibilityText}"` : ''}
    ${context && context != 'light-inverts' ? `context=${context}` : ''}
    ${sx ? 'sx=' + JSON.stringify(sx) : ''}
  >
      ${generateIconItems(linkListItems)}
  </cbp-list>
  `;
};

export const IconLinkList = IconListTemplate.bind({});
  IconLinkList.args = {
      linkListItems: [
          {
            content: "List Item 1",
            icon: "plus",
            color: "var(--cbp-color-green-cool-50)",
          },
          {
            content: "List Item 2",
            icon: "book",
            color: "var(--cbp-color-green-cool-50)",
          },
          {
            content: "List Item 3",
            icon: "exclamation-circle",
            color: "var(--cbp-color-red-50)",
          },
        ]
};