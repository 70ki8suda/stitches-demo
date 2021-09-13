import FeaturedContent from '../components/FeaturedContent';

export default {
  title: 'FeaturedContent',
  component: FeaturedContent,
  argTypes: {
    color: {
      options: ['yellow', 'red', 'blue'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <FeaturedContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'yellow',
};
