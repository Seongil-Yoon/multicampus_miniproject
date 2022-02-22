$(document).ready(function () {

    // let boardList = [];
    let boardMap = new Map();

    class Board {
        constructor(seq, title, writer, contents) {
            this.seq = seq;
            this.title = title;
            this.writer = writer;
            this.contents = contents;
            this.time = new Date().toLocaleString();
            this.viewcount = 0;
        }
        toString() {
            return this.title + "-" + this.contents + "-" + this.writer + "-" + this.time + "-" +
                this.viewcount;
        }
        addViewCount() {
            return this.viewcount += 1;
        }

    }
    ////////////////////////////////

    function createData() {
        boardList.push(new Board(0, "글0", "윤성일0", "안녕하세요0"));
        boardList.push(new Board(1, "글1", "윤성일1", "안녕하세요1"));
        boardList.push(new Board(2, "글2", "윤성일2", "안녕하세요2"));
        boardList.push(new Board(3, "글3", "윤성일3", "안녕하세요3"));
        boardList.push(new Board(4, "글4", "윤성일4", "안녕하세요4"));
        boardList.push(new Board(5, "글5", "윤성일5", "안녕하세요5"));
        boardList.push(new Board(6, "글6", "윤성일6", "안녕하세요6"));
        boardList.push(new Board(7, "글7", "윤성일7", "안녕하세요7"));
        boardList.push(new Board(8, "글8", "윤성일8", "안녕하세요8"));
        boardList.push(new Board(9, "글9", "윤성일9", "안녕하세요9"));
    }

    function creatView() {

        $(".boardLine").remove();
        let html = '';
        for (i in boardList) {
            html += `
                <li class="boardLine" value="${boardList[i].seq}">
                    <div>
                        <a class="contents" id="boardInfo" name="boardInfo" href=board?board_num=${boardList[i].seq}>
                            <span>${boardList[i].seq}</span>
                            <span>${boardList[i].title}</span>
                            <span>${boardList[i].contents}</span>
                            <span>${boardList[i].writer}</span>
                            <span>${boardList[i].time}</span>
                            <span>${boardList[i].viewcount}</span>
                        </a>
                    </div>
                    <div>
                        <a class="btnClass" id="alterBtn" name="alterBtn" href=alterboard?board_num=${boardList[i].seq}>
                            글 수정
                        </a>
                        <a class="btnClass" id="delBtn" name="delBtn";">
                            글 삭제
                        </a>
                    </div>
                </li>
            `
            console.log(boardList[i].title);
        }
        $("ul[class=boardList]").append(html);

    }

    function deleteHandler() {
        $(document).on("click", "#delBtn", function (event) {
            //이벤트 부모태그인 li의 value값 가져오기
            let board_num = $(event.target).parents(".boardLine").val();

            // 객체의 seq값을 찾아서 없애야 됨
            boardList.splice(board_num, 1)
            console.log(boardList);

            creatView();
        }); //end of click
    }

    function main() {
        createData();
        console.log(boardList);
        creatView();
        deleteHandler();

    }
    main();

}) //end of ready