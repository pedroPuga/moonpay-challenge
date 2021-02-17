SELECT COUNT(*) from (
	SELECT *
	FROM transactions
	GROUP BY user_id
	HAVING SUM(usd_amount) > 1000 AND SUM(usd_amount) < 2000
)
