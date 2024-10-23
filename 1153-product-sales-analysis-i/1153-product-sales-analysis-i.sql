select product_name,year,price
from Product inner join Sales
on Sales.product_id=Product.Product_id
