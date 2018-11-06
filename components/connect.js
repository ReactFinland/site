import React from "react";
import { request } from "graphql-request";
import config from "config";

function connect(query, propsToVars) {
  return component => {
    let queryCache = {};

    class Connect extends React.Component {
      constructor(props) {
        super(props);

        this.state = { data: queryCache || null };
      }
      componentDidMount() {
        this.fetchData().then(data => this.setState(() => data));
      }
      render() {
        if (this.state.data === null) {
          return null;
        } else {
          return React.createElement(component, {
            ...this.props,
            ...this.state.data,
          });
        }
      }
      fetchData() {
        let variables = {
          conferenceId: config.conferenceId,
        };
        if (propsToVars) {
          variables = {
            ...variables,
            ...propsToVars(this.props),
          };
        }
        return request(config.apiUrl, query, variables).then(data => {
          queryCache = data;

          return { data };
        });
      }
    }

    return Connect;
  };
}

export default connect;
