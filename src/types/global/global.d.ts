declare type DataType = UserType | TodoType | PhotoType | AlbumType | PostType | CommentType;

declare type RelatedDataType = UserType | AlbumType | PostType;

declare type UserType = {
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

declare type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

declare type PhotoType = {
  id: number;
  title: string;
  albumId: number;
  thumbnailUrl: string;
  url: string;
};

declare type AlbumType = {
  id: number;
  userId: number;
  title: string;
};

declare type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

declare type CommentType = {
  id: number;
  postId: number;
  email: string;
  body: string;
};
