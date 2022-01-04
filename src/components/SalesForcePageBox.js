import React from 'react';

const SalesForcePageBox = props => {
    return (
        <div className={`col-12 col-md rounded ${props.content.color_options} p-5 m-md-3 mb-4`}>
              <img
                src={props.content.icon.localFile.publicURL}
                alt={props.content.icon.localFile.name}
                className="img-fluid "
              />

    <h3 className="mt-3">{props.content.heading}</h3>
              <div dangerouslySetInnerHTML={{__html: props.content.sub_content}}></div>
            </div>
    );
}



export default SalesForcePageBox;