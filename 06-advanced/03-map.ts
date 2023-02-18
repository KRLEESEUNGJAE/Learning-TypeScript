{
  type Video = {
    title: string;
    author: string;
  };

  // [1, 2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type VideoOptional = Optional<Video>;
  const videoOptional: VideoOptional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'Lee',
  };
  // video.title = 'bye'; //! error

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const video2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
