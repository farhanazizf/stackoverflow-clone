import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTags, selectTag } from "../../slices/tagSlice";
import {
  LoadingSpinner,
  TagButton,
  TagsContainer,
  TagsList,
  TagsTitle,
} from "./style";
import { fetchQuestions, questionsSlice } from "../../slices/questionSlice";

function TrendingTags() {
  const hasMounted = useRef(false);
  const dispatch = useDispatch();
  const { tags, selectedTag, loading } = useSelector((state) => state.tags);

  useEffect(() => {
    if (!hasMounted.current) {
      dispatch(fetchTags());
      hasMounted.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeTags = useCallback(
    (tag) => {
      dispatch(questionsSlice.actions.resetQuestions());
      dispatch(selectTag(tag.name));
      dispatch(fetchQuestions(tag.name));
    },
    [dispatch]
  );

  if (loading) return <LoadingSpinner />;

  return (
    <TagsContainer>
      <TagsTitle>Trending Tags</TagsTitle>
      <TagsList>
        {tags.slice(0, 10).map((tag) => (
          <TagButton
            key={tag.name}
            onClick={() => onChangeTags(tag)}
            selected={tag.name === selectedTag}
          >
            {tag.name}
          </TagButton>
        ))}
      </TagsList>
    </TagsContainer>
  );
}

export default TrendingTags;
