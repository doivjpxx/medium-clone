export const URL='http://localhost:4000/api/v1/';
export const User = {
  USER_LOGIN: process.env.API_ENDPOINT + '/api/v1/users/login',
  USER_LOGOUT: process.env.API_ENDPOINT + '/api/v1/users/logout',
  USER_REGISTER: process.env.API_ENDPOINT + '/api/v1/users/register',
  USER_DETAIL: process.env.API_ENDPOINT + '/api/v1/users/me',
  USER_FOLLOW: process.env.API_ENDPOINT + '/api/v1/users/follow/{id}',
  USER_UNFOLLOW: process.env.API_ENDPOINT+ '/api/v1/users/unfollow/{id}',
}

export const Article = {
  ARTICLE_LIST: process.env.API_ENDPOINT + '/api/v1/articles/list?page={page}',
  ARTICLE_ADD: process.env.API_ENDPOINT + '/api/v1/articles/add',
  ARTICLE_EDIT: process.env.API_ENDPOINT + '/api/v1/articles/{id}',
  ARTICLE_CLAP: process.env.API_ENDPOINT + '/api/v1/articles/clap/{id}',
  ARTICLE_TOP: process.env.API_ENDPOINT + '/api/v1/utils/top/articles',
  ARTICLE_DELETE: process.env.API_ENDPOINT + '/api/v1/articles/{id}',
  ARTICLE_ME: process.env.API_ENDPOINT + '/api/v1/articles/author',
}

