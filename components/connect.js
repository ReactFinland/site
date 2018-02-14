import React, { Fragment } from "react";
import { graphqlSync } from "graphql";
import { schema } from "@react-finland/content-2018";

const executableSchema = schema.executable();

function connect(query) {
  return component => {
    class Connect extends React.Component {
      constructor() {
        super();

        this.state = graphqlSync(executableSchema, query);
      }
      render() {
        return React.createElement(component, {
          ...this.props,
          ...this.state.data,
        });
      }
    }

    return Connect;
  };
}

export default connect;
