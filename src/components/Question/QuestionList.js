// File: src/components/QuestionList.js
import React, { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../../slices/questionSlice";
import {
  LoadingSpinner,
  QuestionItem,
  QuestionListContainer,
  QuestionStats,
  QuestionTitle,
  Stat,
  UserAvatar,
  UserInfo,
} from "./style";

function QuestionList() {
  const hasMounted = useRef(false);
  const dispatch = useDispatch();
  const { questions, loading, hasMore } = useSelector(
    (state) => state.questions
  );
  const { selectedTag, tags } = useSelector((state) => state.tags);

  const observer = useRef();

  const lastQuestionElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(fetchQuestions(selectedTag));
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, dispatch, selectedTag]
  );

  useEffect(() => {
    if (!hasMounted.current && tags.length > 0) {
      dispatch(fetchQuestions(selectedTag));
      hasMounted.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  const handleQuestionClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <QuestionListContainer>
      {questions.map((question, index) => (
        <QuestionItem
          key={index}
          ref={index === questions.length - 1 ? lastQuestionElementRef : null}
          onClick={() => handleQuestionClick(question.link)}
        >
          <div>
            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionStats>
              <Stat className="score" value={question.score}>
                Score: {question.score}
              </Stat>
              <Stat className="answers" value={question.answer_count}>
                Answers: {question.answer_count}
              </Stat>
              <Stat>Viewed: {question.view_count}</Stat>
            </QuestionStats>
          </div>

          <UserInfo>
            <UserAvatar
              src={question.owner.profile_image}
              alt={question.owner.display_name}
            />
            <span>{question.owner.display_name}</span>
          </UserInfo>
        </QuestionItem>
      ))}
      {loading && <LoadingSpinner />}
    </QuestionListContainer>
  );
}

export default QuestionList;
