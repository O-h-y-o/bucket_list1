// widgets.js

// Actions

const CREATE = "bucket/CREATE";

const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하자"],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return {
        list: new_bucket_list,
      };
    }
    default:
      return state;
  }
}

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}
