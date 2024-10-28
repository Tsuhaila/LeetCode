/* Write your T-SQL query statement below */
WITH ste AS
(SELECT * FROM Activity WHERE activity_type = 'start'),
ente AS
(SELECT * FROM Activity WHERE activity_type = 'end')
SELECT ste.machine_id, ROUND(AVG(ente.timestamp - ste.timestamp), 3) Processing_time FROM ste JOIN ente
ON ste.machine_id = ente.machine_id
GROUP BY ste.machine_id