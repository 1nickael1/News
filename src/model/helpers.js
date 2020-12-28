import {database} from './database';

const postsCollection = database.collections.get('posts');

export const observePosts = () => postsCollection.query().observe();

export const addPosts = async ({title, description, author}) => {
  await database.action(async () => {
    await postsCollection.create((post) => {
      post.title = title;
      post.description = description;
      post.author = author;
    });
  });
};

export const getPosts = async () => await postsCollection.query().fetch();

export const updatePosts = async ({id, title, description, author}) => {
  await database.action(async () => {
    const post = await postsCollection.find(id);

    await post.update((postEdit) => {
      postEdit.title = title;
      postEdit.description = description;
      postEdit.author = author;
    });
  });
};

export const deletePost = async ({id}) => {
  await database.action(async () => {
    const post = await postsCollection.find(id);
    await post.markAsDeleted();
    await post.destroyPermanently();
  });
};
