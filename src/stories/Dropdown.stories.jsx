import React from "react";
import Dropdown from "../component/dropdown/Dropdown";

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  options: [], 
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  options: ['USD', 'JPY', 'GBP'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  options: [],
};

export const WithDefaultSelection = Template.bind({});
WithDefaultSelection.args = {
  defaultValue: 'Option 2',
  options: [],
}; 
