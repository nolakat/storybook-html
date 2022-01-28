

import {createRadioBtn} from './RadioBtn';

export default{
  title: 'Control/Radio Button',
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = ({ label, ...args }) => {
  return createRadioBtn({ label, ...args})
}

export const Primary = Template.bind({});
Primary.args ={
  label: 'Radio'
}
