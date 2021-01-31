import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Input, InputGroup, Icon, List, Loader, FlexboxGrid } from "rsuite";
import Post from "./Post";
import Pagination from "./Pagination";
import reddit from "../Actions/reddit";

const styles = {
  width: 300,
  marginBottom: 10,
};

const initialState = { count: 0 };

function reducer(state, action) {
  console.log(state);
  //   if (state.count < 2) return;
  switch (action.type) {
    case "next":
      return { count: state.count + 1 };
    case "prev":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Search = ({ query, limit }) => {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [subreddit, setSubreddit] = useState(query);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [activePage, setActivePage] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  // https://iq.opengenus.org/get-list-of-posts-using-reddit-api/
  // https://www.youtube.com/watch?v=rP-ZARMGY10
  // https://github.com/reddit-archive/reddit/wiki/JSON

  const fetchItems = (endpoint) => {
    setIsLoading(true);
    reddit
      .search(endpoint)
      .then((items) => {
        const { after, before, children } = items.data;
        setData(children);
        // setActivePage(1);
        if (after && after !== nextPage) {
          setNext(true);
          setNextPage(after);
        }

        if (!before && activePage > 1) {
          debugger;
          setPrev(true);
          // issue with prev failing to get value for before when past the first page
          // another way to fix this is to set the count to a high number e.g 555
          setPrevPage(children[children.length - 1].data.id);
        }

        if (before && before !== prevPage) {
          setPrev(true);
          setPrevPage(before);
        }
      })
      .catch((err) => {
        return;
      });
    setIsLoading(false);
  };

  const onNextHandler = () => {
    fetchItems(
      `https://www.reddit.com/r/${subreddit}.json?limit=${limit}&after=${nextPage}&count=555&sort=new`
    );
    setActivePage(activePage + 1);
  };

  const onPrevHandler = () => {
    if (activePage <= 1) {
      setPrev(false);
      return;
    }
    fetchItems(
      `https://www.reddit.com/r/${subreddit}.json?limit=${limit}&before=${prevPage}&count=555&sort=new`
    );
    setActivePage(activePage - 1);
  };

  // understanding the listings pagination api in reddit
  // https://www.reddit.com/r/redditdev/comments/2uymft/help_please_re_after_and_before_in_api/

  //   www.reddit.com/r/subreddit/new.json?limit=100&before=t3_xyzzy

  // https://github.com/reddit-archive/reddit/wiki/JSON
  // https://www.reddit.com/r/redditdev/comments/d8zl00/another_after_and_before_question/
  useEffect(() => {
    fetchItems(
      `https://www.reddit.com/r/${subreddit}.json?limit=${limit}&sort=new`
    );
    setActivePage(1);
  }, [subreddit]);

  return (
    <div>
      <p>{activePage}</p>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item>
          <InputGroup inside style={styles}>
            <Input
              name={"search"}
              type={"search"}
              defaultValue={subreddit}
              onChange={setSubreddit}
            />
            <InputGroup.Addon>
              <Icon icon="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item>
          {data && (
            <Pagination
              prev={prev}
              next={next}
              onNextHandler={onNextHandler}
              onPrevHandler={onPrevHandler}
            />
          )}
        </FlexboxGrid.Item>
      </FlexboxGrid>

      {isLoading && <Loader size="lg" center={true} backdrop={true} />}

      {data && (
        <List hover>
          {data.map((post, index) => (
            <List.Item key={`${post.data.id}${index}`} index={index + 1}>
              <Post key={`${post.data.id}${index}`} post={post.data} />
            </List.Item>
          ))}
        </List>
      )}
    </div>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  limit: PropTypes.number,
};

export default Search;
