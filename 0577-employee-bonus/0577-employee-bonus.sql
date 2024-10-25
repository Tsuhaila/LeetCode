SELECT 
name,bonus
FROM Bonus b
RIGHT JOIN Employee e
ON b.empId=e.empId
WHERE bonus<1000  or bonus IS NULL
