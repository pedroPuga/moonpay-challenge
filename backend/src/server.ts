import '@babel/polyfill';
import '@babel/register';
import 'dotenv/config';

import { app } from './app';

const port: number = 4000;

app.listen(port, () => console.log(`Server running on ${port}`));
