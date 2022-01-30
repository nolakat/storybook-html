import { createButton, createIconButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Control/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    hollow: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const PrimaryTemplate = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

const IconTemplate = ({ label, ...args }) =>{
  console.log('TEST', args)
  return createIconButton({ label, args });
}

export const Primary = PrimaryTemplate.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  hollow: true,
  size: 'small',
  label: 'Button',
};

export const Icon = IconTemplate.bind({});
Icon.args = {
  hollow: true,
  label: 'Button',
};

