CREATE DATABASE task;
use task;

CREATE TABLE task (
 id INT AUTO_INCREMENT PRIMARY KEY,
 tasks_name VARCHAR(255) NOT NULL,
 status ENUM('Pending ','completed') DEFAULT 'Pending',
 create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 );
 
 
 INSERT INTO  task (tasks_name,status)
 VALUES('Finish homework','Pending'),
 ('Prepare presentation','Pending'),
 ('Buy groceries','Completed');
 
 

SELECT id AS task_id ,tasks_name,status,create_at,updated_at
  FROM task;
  UPDATE task
  SET status ='completed'
  WHERE id=4;
 
  
 SELECT id,tasks_name,status
 FROM task
 WHERE tasks_name='Buy groceries';
 
 SELECT id,tasks_name,status
 FROM task
 WHERE id=4;
 
 SELECT id,tasks_name,status
 FROM task
 WHERE create_at<=CURRENT_TIMESTAMP;
 
 select * from task;
 UPDATE task
 SET tasks_name='updated task name'
 where id=1; 
 

delete from task
where id=1;

select id,tasks_name,status
from task
where status='completed';

 select id,tasks_name,status
 from task
 where status='pending';
 
 
 
 
 
 