import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {updatePosts, deletePost} from '../../model/helpers';

import {Container, Content, InputTitle, ButtonView, ButtonText} from './styles';

const EditNews = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState('');

  const isFocus = useIsFocused();

  const {notice} = route.params;

  useEffect(() => {
    // console.log(notice);
    setId(notice.id);
    setTitle(notice.title);
    setDescription(notice.description);
    setAuthor(notice.author);
  }, [isFocus, notice]);

  async function handleCreatePost() {
    try {
      await updatePosts({id, title, description, author});
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteThePost() {
    try {
      await deletePost({id});
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeletePost() {
    Alert.alert('Confirme', 'Tem certeza que deseja excluir esta notícia?', [
      {
        text: 'Sim',
        onPress: () => deleteThePost(),
      },
      {
        text: 'Não',
      },
    ]);
  }

  return (
    <Container>
      <Content>
        <InputTitle
          placeholder="notícia"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <InputTitle
          placeholder="notícia"
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
          <ButtonText>Editar</ButtonText>
        </ButtonView>
        <ButtonView
          onPress={() => {
            handleDeletePost();
          }}
          style={{backgroundColor: 'red'}}>
          <ButtonText>Excluir</ButtonText>
        </ButtonView>
        <ButtonView
          onPress={() => {
            navigation.goBack();
          }}>
          <ButtonText>Cancelar</ButtonText>
        </ButtonView>
      </Content>
    </Container>
  );
};

export default EditNews;
