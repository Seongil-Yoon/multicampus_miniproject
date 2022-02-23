$(document).ready(function () {
  // let boardList = [];
  let boardMap = new Map();

  class Board {
    constructor(seq, title, writer, contents) {
      this.seq = seq;
      this.title = title;
      this.writer = writer;
      this.contents = contents;
      this.time = new Date().toLocaleTimeString();
      this.viewcount = 0;
    }
    toString() {
      return (
        this.title +
        "-" +
        this.contents +
        "-" +
        this.writer +
        "-" +
        this.time +
        "-" +
        this.viewcount
      );
    }
    addViewCount() {
      return (this.viewcount += 1);
    }
  }
  ////////////////////////////////

  function createData() {
    boardMap.set(0, new Board(0, "글0", "윤성일0", "안녕하세요0"));
    boardMap.set(1, new Board(1, "글1", "윤성일1", "안녕하세요1"));
    boardMap.set(2, new Board(2, "글2", "윤성일2", "안녕하세요2"));
    boardMap.set(3, new Board(3, "글3", "윤성일3", "안녕하세요3"));
    boardMap.set(4, new Board(4, "글4", "윤성일4", "안녕하세요4"));
    boardMap.set(5, new Board(5, "글5", "윤성일5", "안녕하세요5"));
    boardMap.set(6, new Board(6, "글6", "윤성일6", "안녕하세요6"));
    boardMap.set(7, new Board(7, "글7", "윤성일7", "안녕하세요7"));
    boardMap.set(8, new Board(8, "글8", "윤성일8", "안녕하세요8"));
    boardMap.set(9, new Board(9, "글9", "윤성일9", "안녕하세요9"));
  }

  function creatView() {
    $(".boardLine").remove();
    let html = "";
    // map순회
    for (let amount of boardMap.values()) {
      html += `
                  <li class="boardLine" value="${amount.seq}">
                      <div>
                          <a class="contents" id="boardInfo" name="boardInfo" href="free_view.html">
                              <span>${amount.seq}</span>
                              <span>${amount.title}</span>
                              <span>${amount.contents}</span>
                              <span>${amount.writer}</span>
                              <span>${amount.time}</span>
                              <!--<span>${timeForToday(amount.time)}</span>-->
                              <span>${amount.viewcount}</span>
                          </a>
                      </div>
                      <div>
                          <a class="btnClass" id="alterBtn" name="alterBtn" href="freeboard_alter.html">
                              글 수정
                          </a>
                          <a class="btnClass" id="delBtn" name="delBtn";">
                              글 삭제
                          </a>
                      </div>
                  </li>
              `;
    }
    $("ul[class=boardList]").append(html);
  }

  function deleteHandler() {
    $(document).on("click", "#delBtn", function (event) {
      swal({
          title: "다시 확인해 주세요",
          text: "콘텐츠를 삭제하면 다시 복구가 불가능합니다",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            //이벤트 부모태그인 li의 value값 가져오기
            let freeBoard_num = $(event.target).parents(".boardLine").val();

            // 객체의 seq값을 찾아서 없애야 됨
            boardMap.delete(freeBoard_num);
            console.log(boardMap);
            creatView();

          } else {
            swal("취소하였습니다.");
          }
        });
    }); //end of click
  }

  //시간차이 계산 함수
  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);
    console.log(today.getTime());

    //시간은 1970-01-01을 기준으로 한 에포크시간.
    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      if (betweenTimeDay == 0) {
        return `오늘 작성`;
      }
      return `${betweenTimeDay}일전 작성`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  function main() {
    createData();
    console.log(boardMap);
    creatView();
    deleteHandler();
  }
  main();
}); //end of ready