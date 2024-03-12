export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
  website: string;
};

export type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type PhotoType = {
  id: number;
  title: string;
  albumId: number;
  thumbnailUrl: string;
  url: string;
};

export type AlbumType = {
  id: number;
  userId: number;
  title: string;
};

export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CommentType = {
  id: number;
  postId: number;
  email: string;
  body: string;
};
