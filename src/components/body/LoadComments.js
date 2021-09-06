import React from "react";
import dateFormat from "dateformat";

const LoadComments = (props) => {
    return (
        props.comments.map(Comment => {
            return (
                <div key={Comment.id}>
                    <h5>{Comment.author}</h5>
                    <p>{Comment.comment}</p>
                    <p>{dateFormat(Comment.date, " dddd, mmmm dS , yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}
export default LoadComments;