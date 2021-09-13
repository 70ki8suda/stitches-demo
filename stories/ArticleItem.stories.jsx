import ArticleItem from '../components/ArticleItem';
import { styled } from '../stitches.config';

const Wrapper = styled('div', {
  width: '300px',
});

export default {
  title: 'ArticleItem',
  component: ArticleItem,
};

const Template = (args) => (
  <Wrapper>
    <ArticleItem {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'test title',
  body: 'test body',
  i: '1',
};
