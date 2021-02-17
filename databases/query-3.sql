SELECT
  country
FROM
(
  SELECT
    user_id,
      sum(usd_amount) as lifetime_spending
    FROM
      transactions
    GROUP BY
      user_id
) users_spending
LEFT JOIN users u
ON u.id = users_spending.user_id
GROUP BY country
HAVING avg(lifetime_spending) < 500