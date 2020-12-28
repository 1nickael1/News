import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {addPosts} from '../../model/helpers';

import {Container, Content, InputTitle, ButtonView, ButtonText} from './styles';

const CreateNews = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const isFocus = useIsFocused();

  useEffect(() => {
    setTitle('');
    setDescription('');
    setAuthor('');
  }, [isFocus]);

  async function handleCreatePost() {
    try {
      await addPosts({title, description, author});
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <Content>
        <InputTitle
          placeholder="Título da notícia"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <InputTitle
          placeholder="Texto da notícia"
          multiline
          style={{height: 300, textAlign: 'justify'}}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <InputTitle
          placeholder="Autor"
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
        <ButtonView onPress={handleCreatePost}>
          <ButtonText>Criar</ButtonText>
        </ButtonView>
      </Content>
    </Container>
  );
};

export default CreateNews;
