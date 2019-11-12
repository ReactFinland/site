import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Moment, Author, PrevNext } from "../components";
import Page from "./Page";

const BlogPage = ({
  page: {
    file: {
      attributes: { author, date, updateDate },
      body,
      title,
    },
    previous,
    next,
  },
  config,
}) => {
  let postAuthor = author || (config.blog && config.blog.author);

  if (_.isFunction(postAuthor)) {
    postAuthor = postAuthor();
  }

  const footer = (
    <React.Fragment>
      <PrevNext
        previous={previous}
        next={next}
        previousText="Previous post"
        nextText="Next post"
        getTitle={page => page.file.title}
      />
    </React.Fragment>
  );

  return (
    <Page footer={footer}>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Dates date={date} updateDate={updateDate} />
      {postAuthor && <Author author={postAuthor} />}
    </Page>
  );
};

BlogPage.propTypes = {
  page: PropTypes.object,
  section: PropTypes.object,
  config: PropTypes.object,
};

function Dates({ date, updateDate }) {
  return (
    <div className="post__dates">
      {date && (
        <div className="post__publish-date">
          <span className="post__date-text">Published:</span>{" "}
          <Moment className="post__moment" datetime={date} />
        </div>
      )}
      {updateDate && (
        <div className="post__update-date">
          <span className="post__date-text">Updated:</span>{" "}
          <Moment className="post__moment" datetime={updateDate} />
        </div>
      )}
    </div>
  );
}

Dates.propTypes = {
  date: PropTypes.string,
  updateDate: PropTypes.string,
};

export default BlogPage;
