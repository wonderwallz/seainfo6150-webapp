import React from 'react';

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.article.title}</h1>
        <p>{this.props.article.shortText}</p>
        <time dateTime={this.props.article.pubYear}>{this.props.article.pubDate}</time><button onClick={()=>alert(this.props.article.slug)}>show article slug</button>
      </div>
    );
  }

}

export default ArticleListItem;
