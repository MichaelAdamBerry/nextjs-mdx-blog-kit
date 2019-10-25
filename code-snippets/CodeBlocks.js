import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { darcula } from "react-syntax-highlighter/styles/prism";

export const CodeBlockSvelte = props => {
  <>
    <pre>{props.code}</pre>
  </>;
};

export const CodeBlockJS = props => {
  return (
    <>
      <figure>
        {props.figCaption && <figcaption>{props.figCaption}</figcaption>}
        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          showLineNumbers={true}
          customStyle={{
            fontSize: 14,
            margin: 0
          }}
          codeTagProps={{
            fontSize: 14
          }}>
          {props.code}
        </SyntaxHighlighter>
      </figure>
      <style jsx>{`
        figure {
          box-shadow: 0px 10px 20px #2f2f2f;
          margin: 2rem 0;
        }
        figcaption {
          background-color: var(--dark-code-block-background);
          font-size: 14px;
          color: rgb(169, 183, 198);
          text-align: center;
        }
      `}</style>
    </>
  );
};

export const CodeBlockCSS = props => {
  return (
    <figure style={{ margin: "2rem 0", boxShadow: "0px 10px 20px #2f2f2f" }}>
      <SyntaxHighlighter
        language="css"
        style={darcula}
        showLineNumbers={true}
        customStyle={{
          fontSize: 14
        }}
        codeTagProps={{
          fontSize: 14
        }}>
        {props.code}
      </SyntaxHighlighter>
    </figure>
  );
};
