import express, { Request, Response } from 'express';
import { schema, root } from './Schema/schema';
import { graphql } from 'graphql';
import { bestOrderBookQuery } from './Schema/queries';
import { graphqlHTTP } from 'express-graphql';

export const app = express();

app.use(
  '/graphiql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root,
  })
);

app.get('/exchange-routing', (req: Request, res: Response) => {
  const btcAmount: number = parseInt(req.query.amount as string);
  graphql(schema, bestOrderBookQuery, root, '', { btcAmount })
    .then((result) => res.send(result.data.bestOrderBookBuyPrice))
    .catch((error) => console.log(error));
});
