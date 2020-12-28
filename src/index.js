import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {getPosts, deletePost} from './model/helpers';
import {useIsFocused} from '@react-navigation/native';

import {
  Container,
  Content,
  TitleView,
  TitleText,
  DescriptionView,
  DescriptionText,
  AuthorView,
  AuthorText,
  NewsContent,
  Line,
  HeaderText,
  HeaderView,
} from './styles';

const App = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  const isFocus = useIsFocused();

  useEffect(() => {
    handleGetPosts();
  }, [isFocus]);

  async function handleGetPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  function navigateToEdit(notice) {
    navigation.navigate('News', {screen: 'EditNews', params: {notice}});
  }

  return (
    <Container>
      <HeaderView>
        <HeaderText>News</HeaderText>
      </HeaderView>

      <Content>
        {posts.length > 0 ? (
          posts.map((e) => (
            <NewsContent key={e._raw.id} onPress={() => navigateToEdit(e._raw)}>
              <TitleView>
                <TitleText>{e._raw.title}</TitleText>
              </TitleView>
              <DescriptionView>
                <DescriptionText>{e._raw.description}</DescriptionText>
              </DescriptionView>
              <AuthorView>
                <AuthorText>Author: {e._raw.author}</AuthorText>
              </AuthorView>
              <Line />
            </NewsContent>
          ))
        ) : (
          <DescriptionText>Sem notícias</DescriptionText>
        )}
      </Content>
    </Container>
  );
};

export default App;
