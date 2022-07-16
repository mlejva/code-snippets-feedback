import React from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const exampleCode = `
import app, { client } from './app'
import { prettyPrintResponse } from './utils'

app.get('/api/balance', function (request, response, next) {
  Promise.resolve()
    .then(async function () {
      const balanceResponse = await client.accountsBalanceGet({
        access_token: process.env.ACCESS_TOKEN,
      });
      prettyPrintResponse(balanceResponse);
      response.json(balanceResponse.data);
    })
    .catch(next);
});
`.trim();

const WithLineNumbers = () => (
  <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default WithLineNumbers;
