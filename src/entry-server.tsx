import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import Router from './Router';

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Router />
      </StaticRouter>
    </StrictMode>
  );
  return { html };
}