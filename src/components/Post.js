import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        {/* // user profile / user name / insert_dt */}
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is flex width="auto">
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}>수정</Button>
            )}
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>

        {/* // contents */}
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>

        {/* image */}
        <Grid padding="16px">
          <Image shape="rectangle" src={props.image_url} />
        </Grid>

        {/* comments count */}
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
// 페이지를 그리는데 꼭 필요한 데이터를 defaultProps에 담아두면 데이터가 없어서 나는 오류를 방지할 수 있어요!
Post.defaultProps = {
  user_info: {
    user_name: "goeun",
    user_profile:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  },
  image_url:
    "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  contents: "화난 댕댕",
  comment_cnt: 10,
  insert_dt: "2022-04-01 23:33:35",
};

export default Post;
