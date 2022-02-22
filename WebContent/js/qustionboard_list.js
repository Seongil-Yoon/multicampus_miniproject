$(document).ready(function () {



    let boardList = [];

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
        boardList.push(new Board(1, "첫번째 글", "윤성일1", "안녕하세요1"));
        boardList.push(new Board(2, "두번째 글", "윤성일2", "안녕하세요2"));
        boardList.push(new Board(3, "세번째 글", "윤성일3", "안녕하세요3"));
        boardList.push(new Board(4, "네번째 글", "윤성일4", "안녕하세요4"));
        boardList.push(new Board(5, "다섯번째 글", "윤성일5", "안녕하세요5"));
        boardList.push(new Board(6, "여섯번째 글", "윤성일6", "안녕하세요6"));
        boardList.push(new Board(7, "일곱번째 글", "윤성일7", "안녕하세요7"));
        boardList.push(new Board(8, "여덟번째 글", "윤성일8", "안녕하세요8"));
        boardList.push(new Board(9, "아홉번째 글", "윤성일9", "안녕하세요9"));
        boardList.push(new Board(10, "열번째 글", "윤성일10", "안녕하세요10"));
    }


    function creatView() {
        let html = '';
        for (i in boardList) {
            html += `
                <li class="boardLine">
                    <a>
                        <span>${boardList[i].seq}</span>
                        <span>${boardList[i].title}</span>
                        <span>${boardList[i].contents}</span>
                        <span>${boardList[i].writer}</span>
                        <span>${boardList[i].time}</span>
                        <span>${boardList[i].viewcount}</span>
                        <span>
                            <button class="boardLineBtn" id="boardAlterBtn">글 수정</button>
                        </span>
                        <span>
                            <button class="boardLineBtn" id="boardDeleteBtn">글 삭제</button>
                        </span>
                    </a>
                </li>
            `
            console.log(boardList[i].title);
        }
        $("ul[class=boardList]").append(html);

    }

    function alterHandler() {
        $("#boardAlterBtn").on("click", function () {
            console.log("ASd");
        })
    }

    function deleteHandler() {
        $("#boardDeleteBtn").on("click", function () {

        })
    }

    function main() {
        createData();
        console.log(boardList);
        creatView();
        alterHandler();
        deleteHandler();

    }
    main();

}) //end of ready