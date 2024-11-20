select sell_date,count(product) as num_sold,
string_agg(product,',')
within group(order by product asc) as products
from(select distinct * from Activities) as a
group by sell_date
