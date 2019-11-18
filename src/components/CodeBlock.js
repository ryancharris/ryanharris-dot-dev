import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

function CodeBlock(props) {
  const { children, language } = props

  return (
    <Highlight {...defaultProps} code={children.props.children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px", overflow: "auto" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
