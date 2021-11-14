create table users (
  user_id serial primary key,
  email varchar(100) not null,
  name varchar(50) not null,
  password text not null,
);
