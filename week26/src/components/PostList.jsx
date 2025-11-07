// src/components/PostList.jsx
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getPosts, getPostsByUsername, uploadPost } from "../api";
import Post from "./Post";
import { FEED_VARIANT } from "../values";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import PostForm from "./PostForm";

function PostList({ variant = FEED_VARIANT.HOME_FEED, showPostForm }) {
  const queryClient = useQueryClient();

  // TODO: 1. `variant` prop에 따라 postsQueryKey와 postsQueryFn을 동적으로 설정하세요.
  // HINT: if/else 문을 사용해서 HOME_FEED와 MY_FEED를 분기 처리할 수 있습니다.
  let postsQueryKey;
  let postsQueryFn;

  if (variant === FEED_VARIANT.HOME_FEED) {
    // HOME_FEED일 경우, 모든 포스트를 가져오기 위한 쿼리 키와 함수를 설정합니다.
    postsQueryKey = ["posts"];
    postsQueryFn = getPosts;
  } else if (variant === FEED_VARIANT.MY_FEED) {
    // MY_FEED일 경우, 특정 사용자(여기서는 'codeit'으로 가정)의 포스트를 가져오기 위한 쿼리 키와 함수를 설정합니다.
    // TODO: 실제 사용자 이름은 인증 시스템이나 전역 상태 관리에서 가져와야 합니다.
    // 현재는 예시로 'codeit'을 사용합니다.
    const MY_FEED_USERNAME = "codeit";
    postsQueryKey = ["posts", MY_FEED_USERNAME];
    postsQueryFn = () => getPostsByUsername(MY_FEED_USERNAME);
  }

  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });

  // TODO: 2. useMutation을 완성하세요.
  // `mutationFn`에는 `uploadPost` 함수를 사용하고,
  // `onSuccess` 콜백에서 queryClient를 사용해 "자동 새로고침" 기능을 구현하세요.
  const uploadPostMutation = useMutation({
    mutationFn: uploadPost, // 포스트를 서버에 업로드하는 함수 지정
    onSuccess: () => {
      // 포스트 업로드 성공 시, 관련 쿼리를 무효화하여 데이터를 자동으로 새로고침합니다.
      // HOME_FEED인 경우 모든 포스트 목록을, MY_FEED인 경우 특정 사용자의 포스트 목록을 새로고침합니다.
      if (variant === FEED_VARIANT.HOME_FEED) {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      } else if (variant === FEED_VARIANT.MY_FEED) {
        // TODO: 실제 사용자 이름은 인증 시스템이나 전역 상태 관리에서 가져와야 합니다.
        // 현재는 예시로 'codeit'을 사용합니다.
        const MY_FEED_USERNAME = "codeit";
        queryClient.invalidateQueries({ queryKey: ["posts", MY_FEED_USERNAME] });
      }
      toast("포스트가 성공적으로 업로드 되었습니다!");
    },
  });

  const handleUploadPost = (newPost) => {
    uploadPostMutation.mutate(newPost, {
      // 포스트 업로드 성공 시 토스트 알림은 useMutation의 onSuccess에서 처리되므로, 여기서는 제거합니다.
    });
  };

  // TODO: 3. isPending과 isError 상태에 따라 적절한 컴포넌트를 리턴하세요.
  // 데이터 로딩 중일 때는 로딩 페이지를 표시합니다.
  if (isPending) {
    return <LoadingPage />;
  }

  // 데이터 로딩 중 에러가 발생했을 때는 에러 페이지를 표시합니다.
  if (isError) {
    return <ErrorPage />;
  }

  const posts = postsData?.results ?? [];

  return (
    <ListContainer>
      {showPostForm ? (
        <PostForm
          onSubmit={handleUploadPost}
          // TODO: 4. 포스트 업로드 중에 버튼을 비활성화하세요.
          // 포스트 업로드 중에는 버튼을 비활성화하여 중복 제출을 방지합니다.
          buttonDisabled={uploadPostMutation.isPending}
        />
      ) : (
        ""
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;
