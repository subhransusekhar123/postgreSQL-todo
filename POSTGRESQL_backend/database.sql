
CREATE DATABASE pernTodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

SELECT * FROM todo;


-- \l = for all database
-- \dt = to see all table inside a database
-- 