SELECT user_id
FROM transactions
GROUP BY user_id
ORDER BY SUM(usd_amount) DESC
LIMIT 3;