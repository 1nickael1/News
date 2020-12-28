import {Model} from '@nozbe/watermelondb';
import {field, date, readonly} from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';

  @field('title') title;
  @field('description') description;
  @field('author') author;

  //   @action async addPost(title, description, author) {
  //     return await this.collections.get('posts').create((post) => {
  //       post.title.set(title);
  //       post.description.set(description);
  //       post.author.set(author);
  //     });
  //   }
  //   @action async updatePost(title, description, author) {
  //     return await this.collections.get('posts').create((post) => {
  //       post.title.set(title);
  //       post.description.set(description);
  //       post.author.set(author);
  //     });
  //   }
}
