import React from 'react';


// NOTE
/* Project posts in exhibitions currently have `exhibiton-post` as a template key.
 I don't render these on their own, but Gatsby rightfully complains when it can't find 
 the corresponding template. So instead of changing all of the template keys with a quick sed
 I kept this here, in case there comes a point when one wants to have an exhibit with posts.

 — LLA 200528 */

class ExhibitionPost extends React.Component {
  render() {
    return (
      <div> PHONY </div>
    );
  }
}

export default ExhibitionPost;
