import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/comments/actions';

export const Comments = ({}) => {
  const dispatch = useDispatch();
  const commments = useSelector((state) => state.comments);
  
  useEffect(() => {
    fetchComments()(dispatch);
  }, []);

  return (
    <div className="comments">
      {commments.loading ? (
        <div>로딩중...</div>
      ) : (
        <div>
          {commments.items.map((comment, idx) => {
            return (
              <div key={idx}>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.items,
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
