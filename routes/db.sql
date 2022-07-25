create table users (
    id serial primary key not null,
    fullname varchar(255) not null,
    role varchar(255) not null default 'user',
    email varchar(255) not null,
    password varchar(255) not null,
    created_at date not null,
    deleted_at date,
    update_at date,
    phone_no varchar(50)
);
alter table users
add column phone_no varchar(50);

alter table users
add column password varchar(255) not null;


insert into users(fullname,email,phone_no,created_at) values('mukesh','vbhj',98,current_timestamp);