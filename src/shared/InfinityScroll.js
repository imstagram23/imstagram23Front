import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {

    const {children, callNext, is_next, loading} = props;

    const _handleScroll = _.throttle(() => {

        // 로딩 중이면 다음 걸 부르면 안됨
        if(loading){
            return;
        }

        const {innerHeight} = window;
        const {scrollHeight} = document.body;
        // 스크롤 계산 (브라우저마다 다르기 때문에 아래의 방법으로 계산)
        const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop < 200) {
            // 로딩 중이면 다음 걸 부르면 안됨
            if (loading) {
              return;
            }

            callNext();
        }
    }, 300)

    // 메모이제이션(리렌더링이 되더라도 _handleScroll 함수 초기화 하지 않게 해주기)
    // 리덕스에서 바꼈을 때, 어떻게 메모이제이션된 함수 내부로 전달하나? 배열에 넘겨주면 됨
    const handleScroll = React.useCallback(_handleScroll, [loading])

    // 처음 로딩이 되었을 때, 이벤트 달아주기 먼저
    React.useEffect(() => {

        if(loading){
            return;
        }

        // 다음 게시글이 없으면 계속 구독할 필요 없음
        if(is_next){
            window.addEventListener("scroll", handleScroll);
        }else{
            window.removeEventListener("scroll", handleScroll);
        }

        // Clean up. 함수형 이벤트 구독 취소 방법(클래스형은 unMount에서 처리)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [is_next, loading]);

    return (
        <React.Fragment>
            {props.children}
            {is_next && <Spinner/>}
        </React.Fragment>
    )
}

InfinityScroll.defaultProps = {
    children: null,
    callNext: () => {},
    is_next: false,
    // 아직 다음걸 불러오지 않았는데 또 같은걸 부르는 일 방지
    loading: false,
}

export default InfinityScroll;